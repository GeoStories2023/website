import React from 'react'
import "@/style/Premium.scss";
import { useNavigate } from "react-router-dom";
import panorama from "@/assets/img-premium/panorama.jpg";
import panoramaSmall from "@/assets/img-premium/panorama-small.png";
import {
  IoPersonCircle as ProfilePicture,
} from "react-icons/io5";

function Premium() {
  const navigate = useNavigate();

  return (
    <div className="premium-container">
      <div className="premium-header">
        <span>Vorteile mit Pro</span>
        <img src={panoramaSmall} alt="landscape" />
      </div>
      <div className="upgrade">
        <div className="upgrade-container">
          <div className="login" onClick={() => {
                  navigate("/login");
                }}>
            <ProfilePicture size={52} />
            <span>Login</span>
          </div>
          <div className="upgrade-description">
            <span className="premium-upgrade">Jetzt anmelden und auf 
            <br /> PRO-Version upgraden!
            </span>
            <span className="register">Noch kein Konto? Dann schnell <a href="/register">registrieren</a></span>
          </div>
        </div>
      </div>
      <div className="premium-description">
        <div className="premium-description-container">
          <span className="header-description">Was wir bieten</span>
          <span className="text-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere asperiores ullam accusantium tempore minima rerum, aperiam sed esse. Quo accusamus itaque architecto eveniet voluptate dicta autem repudiandae ex non cum!</span>
        </div>
      </div>
      <div className="advantages">
        <div className="advantages-container">
          <div className="advantage">
            <ProfilePicture size={52} />
            <span>ohne Werbung</span>
          </div>
          <div className="advantage">
            <ProfilePicture size={52} />
            <span>ganz viele neue tolle Inhalte</span>
          </div>
          <div className="advantage">
            <ProfilePicture size={52} />
            <span>neue Touren</span>
          </div>
          <div className="advantage">
            <ProfilePicture size={52} />
            <span>weitere Abzeichen werden freigeschaltet</span>
          </div>
          <div className="advantage">
            <ProfilePicture size={52} />
            <span>für 49,99€ im Jahr oder 4,99€ im Monat</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Premium;
