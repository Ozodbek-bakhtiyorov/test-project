import { Profile, Register, Login } from "./Pages";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Layouts/Header/Header";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      toast.warn("You Must Be Logged In To View This Page");
      navigate("/login");
    } else navigate("/");
  }, []);
  return (
    <>
      <ToastContainer
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route exact path="/" element={<Profile />} />
        <Route  path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />   
        <Route element="<h1>404 page not found</h1> :(">
        </Route>
      </Routes>
   
    </>
  );
}

export default App;
