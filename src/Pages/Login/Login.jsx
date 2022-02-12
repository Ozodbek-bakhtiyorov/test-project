import React from "react";
import { RegisterEl } from "../Register/Register.element";
import InputField from "./../../Components/Passwordfield";
import Title from "./../../Components/Title/Title";
import Button from "./../../Components/Button/Button";
import PasswordField from "./../../Components/Passwordfield";
import { getlogformvals,clearlog } from "../../Redux/actions";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loggeduser } = useSelector((state) => state);
  console.log(loggeduser);

  const getInpuval = (e) => {
    dispatch(getlogformvals(e));
  };
  const authenticationhandler = () => {
    try {
      const formdata = new FormData();

      Object.keys(loggeduser).forEach((key) => {
        return formdata.append(key, loggeduser[key]);
      });
      console.log(formdata.get("login"));
      axios
        .post("http://92.63.206.40:1122/api/login", formdata)
        .then((res) => {
          if (res.data.msg !== "ok") {
            toast.error(res.data.msg);
          } 
          else {
            toast.success("Successfully logged in 😇 ");
            localStorage.setItem("user", true);
            localStorage.setItem("token", res.data.token);
            navigate("/");
            dispatch(clearlog());
          }
        })
        .catch((err) =>
          toast.error(`Error in fetching data 😥   ${err.message}`)
        );
    } catch (e) {
      toast.error(e.message);
    }
  };
  return (
    <RegisterEl>
      <div className="left">
        <div className="content">
          <h1 className="logo">logo</h1>
          <h2>Sign In</h2>
        </div>
      </div>
      <div className="right">
        <div className="right__content">
          <Title title="Logo" texttransform={"uppercase"} />
          <div className="forms-list">
            <InputField
              type="text"
              label="Login"
              name="login"
              placeholder={"Eg. your login"}
              onchange={getInpuval}
            />
            <PasswordField
              label="Pasword"
              placeholder="Eg. your pasword here"
              onchange={getInpuval}
              name={"password"}
            />
          </div>
          <div className="reg-button">
            <Link to="/register">Sign Up</Link>
          </div>
          <div className="reg-button" onClick={authenticationhandler}>
            <Button type="button" title="Login" />
          </div>
        </div>
      </div>
    </RegisterEl>
  );
};

export default Login;
