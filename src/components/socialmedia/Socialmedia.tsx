import React from "react";
import "@/style/Socialmedia.scss";
import insta from "@/assets/icons/instagram.svg";
import twitter from "@/assets/icons/twitter.svg";
import facebook from "@/assets/icons/facebook.svg";

function Socialmedia() {
  return (
    <div className="socialmedia">
        <div className="icon">
            <a href="https://www.instagram.com/">
                <img src={insta} className="insta" alt="Instagram" />
            </a>
        </div>
        <div className="icon">
            <a href='https://www.instagram.com/'>
                <img src={twitter} className="insta" alt="Instagram" />
            </a>
        </div>
        <div className="icon">
            <a href='https://www.instagram.com/'>
                <img src={facebook} className="insta" alt="Instagram" />
            </a>
        </div>
    </div>
  );
}

export default Socialmedia;
