import React from "react";
import Socialmedia from "@/components/socialmedia/Socialmedia";
import bigPicture from "@/assets/HomePagePic1_full.png";
import phone from "@/assets/iphone.png";
import qrcode from "@/assets/qr_code_playstore.png";
import book from "@/assets/book-quote.png";
import explore from "@/assets/homepage-erkunden.jpg";
import diary from "@/assets/homepage-tagebuch.jpg";
import review from "@/assets/homepage-rueckblick.jpg";
import "@/style/HomeDefault.scss";
import { User } from "@/types/General";

function HomeDefault({ user }: { user: User }) {
  return (
    <div className="home-container">
      <Socialmedia />
      <div className="big-picture-container">
        <img src={bigPicture} alt="big-picture" className="big-picture" />
      </div>
      <div className="app-container">
        <img src={phone} alt="phone" className="phone" />
        <div className="app-description">
          <div className="app-description-text">
            <span className="app-description-text-big">
              Jetzt die App <br /> herunterladen!
            </span>
            <span className="app-description-text-small">
              Verfügbar für iOS und Android
            </span>
          </div>
          <img src={qrcode} alt="app-qr-code" className="app-qr-code" />
        </div>
      </div>
      <div className="quote-container">
        <div className="quote-inner-container">
          <div className="quote-text">
            <div className="quote-quote">
              <span>
                "Die Welt ist ein Buch. Wer nie reist, sieht nur eine Seite
                davon."
              </span>
            </div>
            <div className="quote-author">
              <span>Augustinus Aurelius</span>
            </div>
          </div>
          <img src={book} alt="quote-book" className="quote-book" />
        </div>
      </div>
      <div className="features-container">
        <div className="single-feature-container">
          <img src={explore} alt="explore-img" className="img-feature" />
          <div className="text-feature">
            <span className="header-feature">
              Erkunde neue Länder und Städte
            </span>
            <span className="description-feature">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </span>
          </div>
        </div>
        <div className="single-feature-container">
          <img src={diary} alt="diary-img" className="img-feature" />
          <div className="text-feature">
            <span className="header-feature">Schreibe dein Tagebuch</span>
            <span className="description-feature">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </span>
          </div>
        </div>
        <div className="single-feature-container">
          <img src={review} alt="review-img" className="img-feature" />
          <div className="text-feature">
            <span className="header-feature">
              Blick auf deine Geo-Story zurück
            </span>
            <span className="description-feature">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeDefault;
