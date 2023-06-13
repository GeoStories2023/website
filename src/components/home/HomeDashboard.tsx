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
  const news = [
    {
      img: homepagePicture,
      headline: "Hallo bei GeoStories",
      content: "Mit Geostories schreibst du deine Geschichte in der Welt.",
      link: <a href="">Weiterlesen</a>,
    },
    {
      img: vision,
      headline: "Unsere Zukunftspläne",
      content: "Natürlich wollen wir uns weiterentwicklen.",
      link: <a href="/features">Zur Roadmap</a>,
    },
    {
      img: work,
      headline: "Mitarbeiter des Monats",
      content:
        "Unser Mitarbeiter des Monats, Noah, gibt Einblicke in seine Arbeit.",
      link: <a href="">Weiterlesen</a>,
    },
  ];

  const stories = [
    {
      img: rome,
      headline: "Erkunde die Museen von Rom",
      content: "Du hast Lust die Museums-Tour in Rom?",
      link: (
        <a href="http://localhost:5173/tours/Europe/Italy/c03737ab-64db-4ea5-9b62-e91cfd471097">
          Weiterlesen
        </a>
      ),
    },
    {
      img: hamburg,
      headline: "Das deutsche Venedig",
      content: "Erkunde die Brückenstadt im Norden Deutschlands.",
      link: (
        <a href="http://localhost:5173/tours/Europe/Germany/ccb5ef39-33a6-439c-813e-eeed37867769">
          Weiterlesen
        </a>
      ),
    },
    {
      img: london,
      headline: "Kannst du die Glocken hören?",
      content:
        "Der Big Ben und weitere Attraktionen warten in London auf dich.",
      link: <a href="">Weiterlesen</a>,
    },
  ];

  const continents = [
    {
      title: "Nordamerika",
      navigate: (
        <button
          onClick={() => {
            navigate("/tours/north-america");
          }}
        >
          <img src={northAmerica} alt="Nordamerika" />
        </button>
      ),
    },
    {
      title: "Europa",
      navigate: (
        <button
          onClick={() => {
            navigate("/tours/europe");
          }}
        >
          <img src={europe} alt="Europa" />
        </button>
      ),
    },
    {
      title: "Asien",
      navigate: (
        <button
          onClick={() => {
            navigate("/tours/asia");
          }}
        >
          <img src={asia} alt="Asien" />
        </button>
      ),
    },
    {
      title: "Südamerika",
      navigate: (
        <button
          onClick={() => {
            navigate("/tours/south-america");
          }}
        >
          <img src={southAmerica} alt="Südamerika" />
        </button>
      ),
    },
    {
      title: "Afrika",
      navigate: (
        <button
          onClick={() => {
            navigate("/tours/africa");
          }}
        >
          <img src={africa} alt="Afrika" />
        </button>
      ),
    },
    {
      title: "Ozeanien",
      navigate: (
        <button
          onClick={() => {
            navigate("/tours/oceania");
          }}
        >
          <img src={oceania} alt="Ozeanien" />
        </button>
      ),
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

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
          <div className="container">
            <h2>News</h2>
            <Carousel
              className="carousel"
              keyboard={true}
              pause={"hover"}
              touch={true}
            >
              {news.map((item, i) => {
                return (
                  <Carousel.Item className="carousel-item" key={i}>
                    <img
                      className="d-block w-100"
                      src={item.img}
                      alt="First slide"
                    />
                    <Carousel.Caption className="carousel-caption">
                      <h3>{item.headline}</h3>
                      <p>
                        {item.content} {item.link}
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
      <div className="seperator is-blue"></div>
      <div className="tours">
        <div className="tours-container">
          <div className="container">
            <h2>Mögliche Kapitel für deine nächste Geschichte</h2>
            <Carousel
              className="carousel"
              keyboard={true}
              pause={"hover"}
              touch={true}
            >
              {stories.map((item, i) => (
                <Carousel.Item className="carousel-item" key={i}>
                  <img
                    className="d-block w-100"
                    src={item.img}
                    alt="First slide"
                  />
                  <Carousel.Caption className="carousel-caption">
                    <h3>{item.headline}</h3>
                    <p>
                      {item.content} {item.link}
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <div className="seperator"></div>
      <div className="continents">
        <div className="continents-header">
          <h2>Wähle den Kontinent für dein nächstes Reiseziel</h2>
        </div>
        <div className="continents-button-container" id="continent-list">
          <div className="row">
            {continents.map((item, i) => (
              <div className="col-sm-6 col-lg-4" key={i}>
                <div className="continents-image">
                  {item.navigate}
                  <span className="continents-title">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeDashboard;
