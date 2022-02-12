import React, { useEffect, useState } from "react";
import { RegisterEl } from "./Register.element";
import registerjson from "../../Assets/front_json_data/register_data.json";
import Title from "./../../Components/Title/Title";
import InputField from "./../../Components/InputField/InputField";
import { toast } from "react-toastify";
import { Button, Passwordfield } from "../../Components";
import { InputFieldEl } from "./../../Components/InputField/InputField.element";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getregformvals, clearreg } from "../../Redux/actions";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [facultylist, setfacultylist] = useState([]);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);

  const getInpuval = (e) => {
    dispatch(getregformvals(e));
  };

  const clicHandler = () => {
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        user.email
      )
    ) {
      toast.error("Email is not valid");
      return;
    }
    try {
      const formdata = new FormData();
      Object.keys(user).forEach((key) => {
        return formdata.append(key, user[key]);
      });
      axios
        .post("http://92.63.206.40:1122/api/signin", formdata)
        .then((res) => {
          if (res.data.error) {
            toast.error(res.data.error ? res.data.error : res.data.msg);
          } else {
            navigate("/login");
            toast.success("Successfully registered 😇 ");
            dispatch(clearreg());
          }
        })
        .catch((err) =>toast.error(`Error in fetching data 😥   ${err.message}`));
    } catch (e) {
      toast.error(e.message);
    }
  };

  useEffect(() => {
    try {
      axios
        .get("http://92.63.206.40:1122/api/faculty")
        .then((result) => {
          const arr = Object.keys(result.data).map((key) => {
            return {
              name: result.data[key],
              id: key,
            };
          });
          setfacultylist(arr);
        })
        .catch((err) =>toast.error(`Error in fetching data 😥   ${err.message}`));
    } catch (error) {
      toast.error(error.message);
    }
  }, []);
  return (
    <RegisterEl>
      <div className="left">
        <div className="content">
          <h1 className="logo">logo</h1>
          <h2>Registration Form</h2>
        </div>
      </div>
      <div className="right">
        <div className="right__content">
          <Title title="Logo" texttransform={"uppercase"} />
          <div className="forms-list">
            {registerjson.map((item, index) => (
              <InputField key={index} {...item} onchange={getInpuval} />
            ))}
            <InputFieldEl>
              <label htmlFor="faculty">Faculty</label>
              <select id="faculty" name="faculty_id" onChange={getInpuval}>
                <option>Select Faculty</option>
                {facultylist.length ? (
                  facultylist.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))
                ) : (
                  <h1>loading...</h1>
                )}
              </select>
            </InputFieldEl>
            <Passwordfield
              label="Pasword"
              placeholder="Eg. your pasword here"
              name="password"
              onchange={getInpuval}
            />
          </div>
          <div className="reg-button">
            <Link to="/login">Sign In</Link>
          </div>
          <div className="reg-button" onClick={clicHandler}>
            <Button type="button" title="Register" />
          </div>
        </div>
      </div>
    </RegisterEl>
  );
};
export default Register;
