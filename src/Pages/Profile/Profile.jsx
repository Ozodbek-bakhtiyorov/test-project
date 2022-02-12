import React, { useEffect, useState } from "react";
import { ProfileEl, Card } from "./Profile.element";
import img from "../../Assets/images/avatar.png";
import { InputField, Passwordfield, Title } from "../../Components";
import Button from "./../../Components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import {
  changepasswordvals,
  changephonevals,
  changeemailvals,
  clearemail,
  clearpass,
  clearphone,
} from "../../Redux/actions";
import Header from "../../Layouts/Header/Header";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { changePassData, changePhoneData, changeEmailData } = useSelector(
    (state) => state
  );
  const [profile, setProfile] = useState(null);

  const getPassval = (e) => {
    dispatch(changepasswordvals(e));
  };

  const getPhoneval = (e) => {
    dispatch(changephonevals(e));
  };

  const getEmailval = (e) => {
    dispatch(changeemailvals(e));
  };

  const changePassword = () => {
    try {
      if (
        !changePassData.old_password ||
        !changePassData.new_password ||
        !changePassData.repeat_password
      ) {
        toast.error("Please enter all fields");
        return;
      }
      if (changePassData.new_password !== changePassData.repeat_password) {
        toast.error("New password and Repeat password should be same");
        return;
      }
      const formdata = new FormData();
      Object.keys(changePassData).forEach((key) => {
        return formdata.append(key, changePassData[key]);
      });
      axios
        .post("http://92.63.206.40:1122/api/change_password", formdata, {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        })
        .then((res) => {
          if (res.data.msg !== "success") {
            toast.error(res.data.error ? res.data.error : res.data.msg);
          } else {
            navigate("/");
            toast.success("Password Successfully changed 😇 ");
            dispatch(clearpass());
          }
        })
        .catch((err) =>
          toast.error(`Error in fetching data 😥   ${err.message}`)
        );
    } catch (e) {
      toast.error(e.message);
    }
  };

  const changePhone = () => {
    try {
      if (!changePhoneData.phone) {
        toast.error("Please enter all fields");
        return;
      }
      if (!/^[0-9]/.test(changePhoneData.phone)) {
        toast.error("Please enter valid phone number");
        return;
      }

      const formdata = new FormData();
      Object.keys(changePhoneData).forEach((key) => {
        return formdata.append(key, changePhoneData[key]);
      });
      axios
        .post("http://92.63.206.40:1122/api/change_phone", formdata, {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        })
        .then((res) => {
          if (res.data.error) {
            toast.error(res.data.error ? res.data.error : res.data.msg);
          } else {
            navigate("/");
            toast.success("Phone Successfully changed 😇 ");
            dispatch(clearphone());
          }
        })
        .catch((err) =>
          toast.error(`Error in fetching data 😥   ${err.message}`)
        );
    } catch (e) {
      toast.error(e.message);
    }
  };

  const changeEmail = () => {
    if (!changeEmailData.email) {
      toast.error("Please enter all fields");
      return;
    }
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        changeEmailData.email
      )
    ) {
      toast.error("Email is not valid");
      return;
    }
    try {
      const formdata = new FormData();
      Object.keys(changeEmailData).forEach((key) => {
        return formdata.append(key, changeEmailData[key]);
      });
      axios
        .post("http://92.63.206.40:1122/api/change_email", formdata, {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        })
        .then((res) => {
          if (res.data.error) {
            toast.error(res.data.error ? res.data.error : res.data.msg);
          } else {
            navigate("/");
            toast.success("Email Successfully changed 😇 ");
            dispatch(clearemail());
          }
        })
        .catch((err) =>
          toast.error(`Error in fetching data 😥   ${err.message}`)
        );
    } catch (e) {
      toast.error(e.message);
    }
  };
  useEffect(() => {
    try {
      if (localStorage.getItem("user")) {
        axios
          .get("http://92.63.206.40:1122/api/user", {
            headers: {
              "x-access-token": localStorage.getItem("token"),
            },
          })
          .then((result) => {
            setProfile(result.data);
          })
          .catch((err) =>
            toast.error(`Error in fetching data 😥   ${err.message}`)
          );
      } else {
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.message);
    }
  }, []);

  if (!profile) {
    return <h1>Loading</h1>;
  }
  return (
    <>
      <Header />
      <ProfileEl>
    
      <div className=" container">
        <div className="content">
          <Card>
            <div className="header">
              <div className="header_avatar">
                <img src={img} alt="avatar" />
                <span className="camera">
                  <i className="material-icons">linked_camera</i>
                </span>
              </div>
              <div className="header_info">
                <p className="name">
                  <span>
                    {profile.name} {profile.surname}
                  </span>
                  <span className="edit-btn">
                    <i className="material-icons">edit</i>
                  </span>
                </p>
                <p>{profile.std_code}</p>
                <p>Bachelor of science program in</p>
                <p className="name" style={{ textTransform: "uppercase" }}>
                  {profile.faculty_name}
                </p>
              </div>
            </div>
            <div className="body">
              <p>Latest enrolment cohort 2019/20</p>
              <p>
                <b>2021/2022 - Full time</b>
              </p>
              <p> 3^ enrollment,</p>
              <p>
                Academic progress status: <span> ACTIVE</span>
              </p>
              <p>{profile.email}</p>
            </div>
          </Card>
          <Card>
            <div className="form-section">
              <Title title="Change password" />
              <p className="form-info">
                We suggest you change your password regularly
              </p>
              <Passwordfield
                label="Currently pasword:"
                placeholder={"Eg. your pasword here"}
                name={`old_password`}
                onchange={getPassval}
                value={changePassData.old_password}
              />
              <Passwordfield
                label="New pasword:"
                placeholder={"Eg. your pasword here"}
                name={`new_password`}
                onchange={getPassval}
                value={changePassData.new_password}
              />
              <Passwordfield
                label="Confirm pasword:"
                placeholder={"Eg. your pasword here"}
                name={`repeat_password`}
                onchange={getPassval}
                value={changePassData.repeat_password}
              />
              <div className="change-btn" onClick={changePassword}>
                <Button title="Change" />
              </div>
              <p className="form-info-sm">
                Last password change: 29/07/2021 22:09 - IP 151.33.106.247
              </p>
            </div>
          </Card>
          <Card>
            <div className="form-section">
              <Title title="Change Phone number" />
              <p className="form-info">
                Phone no. currently registered (+998 93 497 11-38) Available
                services: EXAMS; HELP DASK; ELECTIONS;
              </p>

              <InputField
                label="New phone number:"
                type="tel"
                placeholder="Eg. your phone number here"
                name="phone"
                onchange={getPhoneval}
                value={changePhoneData.phone}
              />
              <div className="change-btn" onClick={changePhone}>
                <Button title="Change" />
              </div>
              <p className="form-info-sm">
                Last phone number change: 29/07/2021 22:09 22:09 - IP
                151.33.106.247
              </p>
            </div>
          </Card>
          <Card>
            <div className="form-section">
              <Title title="Forward" />
              <p className="form-info">
                TDAU is not responsible for any lost message due to the
                activation of the forwarding service. Valid messages are those
                stored in the server with domain: student@tdau.uz Make sure you
                regularly delete the messages stored on this server.
              </p>
              <InputField
                label="Forwarding e-mail address:"
                type="email"
                placeholder="Eg. your e-mail here"
                name="email"
                onchange={getEmailval}
                value={changeEmailData.email}
              />
              <div className="change-btn" onClick={changeEmail}>
                <Button title="Change" />
              </div>
              <p className="form-info-sm">
                Last e-mail change: 29/07/2021 22:09 - IP 151.33.106.247
              </p>
            </div>
          </Card>
        </div>
      </div>
    </ProfileEl>
    </>
    
  );
};

export default Profile;
