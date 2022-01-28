import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Logout = () => {
  const { push } = useHistory();
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    axios
      .post(
        "http://localhost:9000/api/logout",
        {},
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        localStorage.removeItem("authToken");
        push.apply("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div></div>;
};

export default Logout;

// Task List
// 1. On mount, execute a http request to the logout endpoint.
// 2. On a successful request, remove the token from localStorage and redirect to the login page.
