import React from 'react'
import "@/style/Premium.scss";
import { useNavigate } from "react-router-dom";
import panorama from "@/assets/img-premium/panorama.jpg";
import panoramaSmall from "@/assets/img-premium/panorama-small.png";
import {
  IoPersonCircle as ProfilePicture,
  IoEarth as Icon,
} from "react-icons/io5";

function Premium() {
  const navigate = useNavigate();

    const content = [
        {icon: <Icon size={52} />, content: 'ohne Werbung'},
        {icon: <Icon size={52} />, content: 'ganz viele neue tolle Inhalte'},
        {icon: <Icon size={52} />, content: 'neue Touren'},
        {icon: <Icon size={52} />, content: 'weitere Abzeichen werden freigeschaltet'},
        {icon: <Icon size={52} />, content: 'für 49,99€ im Jahr oder 4,99€ im Monat'},
    ];

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
                      {item.icon}
                  </div>
                  <div className="col-10 col-xl-11">
                    <span>{item.content}</span>
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
