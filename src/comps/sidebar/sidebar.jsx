import React from "react";
import "./style.css";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CallIcon from "@mui/icons-material/Call";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import SmartToy from "@mui/icons-material/SmartToy";
import FaceIcon from "@mui/icons-material/Face";
import { Link } from "react-router-dom";

export const Sidebar = (props) => {
  return (
    <div className="container">
      <ul>
        <li>
          <Link className="link" to="/">
            <div className="icon">
              <HomeIcon />
            </div>
            <div className="title">Home</div>
          </Link>
        </li>
        <li>
          <Link className="link" to="/about">
            <div className="icon">
              <InfoIcon />
            </div>
            <div className="title">About</div>
          </Link>
        </li>
        <li>
          <Link className="link" to="/contactus">
            <div>
              <CallIcon />
            </div>
            <div className="title">Contact Us</div>
          </Link>
        </li>
        <li>
          <Link className="link" to="/movies">
            <div>
              <MovieCreationIcon />
            </div>
            <div className="title">Movies</div>
          </Link>
        </li>
        <li>
          <Link className="link" to="/games">
            <div>
              <SmartToy />
            </div>
            <div className="title">Games</div>
          </Link>
        </li>
        <li>
          <div className="link">
            <FaceIcon />
            Amir
          </div>
        </li>
      </ul>
    </div>
  );
};
