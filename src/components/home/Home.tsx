import React from "react";
import bigPicture from "@/assets/HomePagePic1_full.png";
import phone from "@/assets/iphone.png";
import qrcode from "@/assets/qr_code_playstore.png";
import book from "@/assets/book-quote.png";
import greenSeperator from "@/assets/wave_green_full.svg";
import explore from "@/assets/homepage-erkunden.jpg";
import diary from "@/assets/homepage-tagebuch.jpg";
import review from "@/assets/homepage-rueckblick.jpg";
import "@/style/Home.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
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
        <svg
          className="quote-wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path d="M0,128L120,149.3C240,171,480,213,720,224C960,235,1200,213,1320,202.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
        </svg>
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
        <svg
          className="quote-wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path d="M0,256L120,234.7C240,213,480,171,720,181.3C960,192,1200,256,1320,288L1440,320L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
        </svg>
      </div>
      <div className="features-container">
        <div className="single-feature-container">
          <img src={explore} alt="explore-img" className="img-feature" />
          <div className="text-feature">
            <span className="header-feature">Erkunde</span>
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
            <span className="header-feature">Schreibe Tagebuch</span>
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

export default Home;
