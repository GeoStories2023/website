import React, { useEffect } from "react";
import "@/style/HomeDashboard.scss";
import northAmerica from "@/assets/img-dashboard/continent-northamerica.svg";
import southAmerica from "@/assets/img-dashboard/continent-southamerica.svg";
import europe from "@/assets/img-dashboard/continent-europe.svg";
import africa from "@/assets/img-dashboard/continent-africa.svg";
import asia from "@/assets/img-dashboard/continent-asia.svg";
import oceania from "@/assets/img-dashboard/continent-oceania.svg";
import homepagePicture from "@/assets/HomePagePic1_full.png";
import vision from "@/assets/img-news/vision.png";
import work from "@/assets/img-news/work.png";
import rome from "@/assets/img-dashboard-tours/rome.png";
import hamburg from "@/assets/img-dashboard-tours/hamburg.jpg";
import london from "@/assets/img-dashboard-tours/london.png";
import {
  BsJournalRichtext as Diary,
  BsFillPeopleFill as Friends,
  BsFillStarFill as Favourites,
} from "react-icons/bs";
import { SlBadge as Badges } from "react-icons/sl";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router";
import { User } from "@prisma/client";

function HomeDashboard({ user }: { user: User }) {
  const navigate = useNavigate();
  return (
    <div className="home-dashboard-container">
      <div className="menu-left">
        <Diary
          className="icon"
          onClick={() => {
            navigate("/traveldiary");
          }}
        />
        <Friends
          className="icon"
          onClick={() => {
            navigate("/friends");
          }}
        />
        <Favourites
          className="icon"
          onClick={() => {
            navigate("/favorites");
          }}
        />
        <Badges
          className="icon"
          onClick={() => {
            navigate("/badges");
          }}
        />
      </div>
      <div className="home-dashboard-header">
        <span>Hallo {user.username}, bereit für dein nächstes Abenteuer?</span>
      </div>
      <div className="news">
        <div className="news-container">
          <h2>News</h2>
          <Carousel
            className="carousel"
            keyboard={true}
            pause={"hover"}
            touch={true}
          >
            <Carousel.Item className="carousel-item">
              <img
                className="d-block w-100"
                src={homepagePicture}
                alt="First slide"
              />
              <Carousel.Caption className="carousel-caption">
                <h3>Hallo bei GeoStories</h3>
                <p>
                  Mit Geostories schreibst du deine Geschichte in der Welt.{" "}
                  <a href="">Weiterlesen</a>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
              <img className="d-block w-100" src={vision} alt="Second slide" />

              <Carousel.Caption className="carousel-caption">
                <h3>Unsere Zukunftspläne</h3>
                <p>
                  Natürlich wollen wir uns weiterentwicklen.{" "}
                  <a href="">Zur Roadmap</a>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
              <img className="d-block w-100" src={work} alt="Third slide" />

              <Carousel.Caption className="carousel-caption">
                <h3>Mitarbeiter des Monats</h3>
                <p>
                  Unser Mitarbeiter des Monats, Noah, gibt Einblicke in seine
                  Arbeit. <a href="">Weiterlesen</a>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="seperator is-blue"></div>
      <div className="tours">
        <div className="tours-container">
          <h2>Mögliche Kapitel für deine nächste Geschichte</h2>
          <Carousel
            className="carousel"
            keyboard={true}
            pause={"hover"}
            touch={true}
          >
            <Carousel.Item className="carousel-item">
              <img className="d-block w-100" src={rome} alt="First slide" />
              <Carousel.Caption className="carousel-caption">
                <h3>Erkunde die Museen von Rom</h3>
                <p>
                  Du hast Lust die Museums-Tour in Rom?{" "}
                  <a href="">Weiterlesen</a>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
              <img className="d-block w-100" src={hamburg} alt="Second slide" />

              <Carousel.Caption className="carousel-caption">
                <h3>Das deutsche Venedig</h3>
                <p>Erkunde die Brückenstadt im Norden Deutschlands.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
              <img className="d-block w-100" src={london} alt="Third slide" />

              <Carousel.Caption className="carousel-caption">
                <h3>Kannst du die Glocken hören?</h3>
                <p>
                  Der Big Ben und weitere Attraktionen warten in London auf
                  dich.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="seperator"></div>
      <div className="continents">
        <div className="continents-header">
          <h2>Wähle den Kontinent für dein nächstes Reiseziel</h2>
        </div>
        <div className="continents-button-container">
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="north-america">
                <button
                  onClick={() => {
                    navigate("/tours/northamerica");
                  }}
                >
                  <img src={northAmerica} alt="North America" />
                </button>
                <span>Nordamerika</span>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="south-america">
                <button
                  onClick={() => {
                    navigate("/tours/southamerica");
                  }}
                >
                  <img src={southAmerica} alt="South America" />
                </button>
                <span>Südamerika</span>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="europe">
                <button
                  onClick={() => {
                    navigate("/tours/europe");
                  }}
                >
                  <img src={europe} alt="Europe" />
                </button>
                <span>Europa</span>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="africa">
                <button
                  onClick={() => {
                    navigate("/tours/africa");
                  }}
                >
                  <img src={africa} alt="Africa" />
                </button>
                <span>Afrika</span>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="asia">
                <button
                  onClick={() => {
                    navigate("/tours/asia");
                  }}
                >
                  <img src={asia} alt="Asia" />
                </button>
                <span>Asien</span>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="oceania">
                <button
                  onClick={() => {
                    navigate("/tours/oceania");
                  }}
                >
                  <img src={oceania} alt="Oceania" />
                </button>
                <span>Ozeaninen</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeDashboard;
