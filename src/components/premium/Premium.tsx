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
  const content = [
      'ohne Werbung',
      'ganz viele neue tolle Inhalte',
      'neue Touren',
      'weitere Abzeichen werden freigeschaltet',
      'für 49,99€ im Jahr oder 4,99€ im Monat',
  ]

  return (
    <div className="premium-container">
      <div className="premium-header">
        <div className="premium-headline">
          <h1>Vorteile mit Pro</h1>
        </div>
        <img src={panoramaSmall} alt="landscape" />
      </div>
      <div className="upgrade">
        <div className="upgrade-container">
          <div className="row">
            <div className="col-md-3">
              <div className="login" onClick={() => {
                navigate("/login");
                }}>
                <ProfilePicture size={52} />
                <span>Login</span>
              </div>
            </div>
            <div className="col-md-9">
              <div className="upgrade-description">
            <span className="premium-upgrade">Jetzt anmelden und auf PRO-Version upgraden!
            </span>
                <span className="register">Noch kein Konto? Dann schnell <a href="/register">registrieren</a></span>
              </div>
            </div>
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
          {content.map(item => (
              <div className="advantage">
                <div className="row">
                  <div className="col-2 col-xl-1">
                    <ProfilePicture size={52} />
                  </div>
                  <div className="col-10 col-xl-11">
                    <span>{item}</span>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Premium;
