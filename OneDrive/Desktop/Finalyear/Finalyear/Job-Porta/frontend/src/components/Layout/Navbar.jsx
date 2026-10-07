import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthorized, setIsAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/user/logout",
        {
          withCredentials: true,
        }
      );
      toast.success(response.data.message);
      setIsAuthorized(false);
      navigateTo("/login");
    } catch (error) {
      toast.error(error.response.data.message), setIsAuthorized(true);
    }
  };

  return (
    <nav className={isAuthorized ? "navbarShow" : "navbarHide"}>
      <div className="container">
        <div className="logo">
          <img src="data:image/png;base64,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" alt="logo" />
        </div>
        <ul className={!show ? "menu" : "show-menu menu"}>
          <li>
            <Link to={"/"} onClick={() => setShow(false)}>
              HOME
            </Link>
          </li>
          <li>
            <Link to={"/job/getall"} onClick={() => setShow(false)}>
              ALL JOBS
            </Link>
          </li>
          <li>
            <Link to={"/applications/me"} onClick={() => setShow(false)}>
              {user && user.role === "Employer"
                ? "APPLICANT'S APPLICATIONS"
                : "MY APPLICATIONS"}
            </Link>
          </li>
          {user && user.role === "Employer" ? (
            <>
              <li>
                <Link to={"/job/post"} onClick={() => setShow(false)}>
                  POST NEW JOB
                </Link>
              </li>
              <li>
                <Link to={"/job/me"} onClick={() => setShow(false)}>
                  VIEW YOUR JOBS
                </Link>
              </li>
            </>
          ) : (
            <></>
          )}

          <button onClick={handleLogout}>LOGOUT</button>
        </ul>
        <div className="hamburger">
          <GiHamburgerMenu onClick={() => setShow(!show)} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
