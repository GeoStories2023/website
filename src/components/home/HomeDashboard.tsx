import React, { useEffect } from "react";
import "@/style/HomeDashboard.scss";
import { User } from "@/types/General";
import northAmerica from "@/assets/img-dashboard/continent-northamerica.svg";
import southAmerica from "@/assets/img-dashboard/continent-southamerica.svg";
import europe from "@/assets/img-dashboard/continent-europe.svg";
import africa from "@/assets/img-dashboard/continent-africa.svg";
import asia from "@/assets/img-dashboard/continent-asia.svg";
import oceania from "@/assets/img-dashboard/continent-oceania.svg";
import {
  BsJournalRichtext as Diary,
  BsFillPeopleFill as Friends,
  BsFillStarFill as Favourites,
} from "react-icons/bs";
import { SlBadge as Badges } from "react-icons/sl";
import Carousel from "react-bootstrap/Carousel";

function HomeDashboard({ user }: { user: User }) {
  return (
    <div className="home-dashboard-container">
      <div className="menu-left">
        <Diary className="icon" />
        <Friends className="icon" />
        <Favourites className="icon" />
        <Badges className="icon" />
      </div>
      <div className="home-dashboard-header">
        <span>Hallo Max, bereit für dein nächstes Abenteuer?</span>
      </div>
      <div className="news">
        <div className="news-container">
          <span>News</span>
          <Carousel
            className="carousel"
            keyboard={true}
            pause={"hover"}
            touch={true}
          >
            <Carousel.Item className="carousel-item">
              <img
                className="d-block w-100"
                src="https://wallpaperaccess.com/full/1154341.jpg"
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
              <img
                className="d-block w-100"
                src="https://wallpapercave.com/wp/wp2634222.jpg"
                alt="Second slide"
              />

              <Carousel.Caption className="carousel-caption">
                <h3>Unsere Zukunftspläne</h3>
                <p>
                  Natürlich wollen wir uns weiterentwicklen.{" "}
                  <a href="">Zur Roadmap</a>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
              <img
                className="d-block w-100"
                src="https://images5.alphacoders.com/343/thumb-1920-343645.jpg"
                alt="Third slide"
              />

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
      <div className="seperator"></div>
      <div className="tours">
        <div className="tours-container">
          <span>Mögliche Kapitel für deine nächste Geschichte</span>
          <Carousel
            className="carousel"
            keyboard={true}
            pause={"hover"}
            touch={true}
          >
            <Carousel.Item className="carousel-item">
              <img
                className="d-block w-100"
                src="https://wallpaperaccess.com/full/1154341.jpg"
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
              <img
                className="d-block w-100"
                src="https://wallpapercave.com/wp/wp2634222.jpg"
                alt="Second slide"
              />

              <Carousel.Caption className="carousel-caption">
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
              <img
                className="d-block w-100"
                src="https://images5.alphacoders.com/343/thumb-1920-343645.jpg"
                alt="Third slide"
              />

              <Carousel.Caption className="carousel-caption">
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="seperator"></div>
      <div className="continents">
        <div className="continents-header">
          <span>Wähle den Kontinent für dein nächstes Reiseziel</span>
        </div>
        <div className="continents-button-container">
          <div className="america">
            <div className="north-america">
              <button>
                <img src={northAmerica} alt="North America" />
              </button>
              <span>Nordamerika</span>
            </div>
            <div className="south-america">
              <button>
                <img src={southAmerica} alt="South America" />
              </button>
              <span>Südamerika</span>
            </div>
          </div>
          <div className="europe-africa">
            <div className="europe">
              <button>
                <img src={europe} alt="Europe" />
              </button>
              <span>Europa</span>
            </div>
            <div className="africa">
              <button>
                <img src={africa} alt="Africa" />
              </button>
              <span>Südamerika</span>
            </div>
          </div>
          <div className="asia-oceania">
            <div className="asia">
              <button>
                <img src={asia} alt="Asia" />
              </button>
              <span>Asien</span>
            </div>
            <div className="oceania">
              <button>
                <img src={oceania} alt="Oceania" />
              </button>
              <span>Ozeaninen</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeDashboard;
