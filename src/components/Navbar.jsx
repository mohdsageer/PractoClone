import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="container navbar_mainContainer">
        <nav className="navContaier">
          <div className="navContainer_image">
            <img
              src="https://www.practo.com/nav/9.5.10/consumer/images/practo.svg"
              alt="practo_logo"
              style={{
                maxWidth: "108px",
                maxHeight: "25px",
              }}
            />
          </div>
          <div className="centerContent">
            <ul>
              <li>Find Doctor</li>
              <li>Video Consult</li>
              <li>Medicines</li>
              <li>Lab Tests</li>
              <li>Surgeries</li>
            </ul>
          </div>
          <div className="rightNavbar">
            <span>
              For Corporates{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </span>

            <span>
              For Providers
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </span>
            <span>
              Security &amp; help{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </span>
            <div className="loginButton">
              <span>
                <a href="/">Login / Signup</a>
              </span>
            </div>
          </div>
        </nav>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
