import React from "react";
import "@/style/Socialmedia.scss";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";

function Socialmedia() {
  return (
    <div className="socialmedia">
        <div className="icon">
            <a href="https://www.instagram.com/">
                <FaInstagram size={32} />
            </a>
        </div>
        <div className="icon">
            <a href='https://twitter.com/?lang=de'>
                <FaTwitter size={32} />
            </a>
        </div>
        <div className="icon">
            <a href='https://www.facebook.com/'>
                <FaFacebook size={32} />
            </a>
        </div>
    </div>
  );
}

export default Socialmedia;
