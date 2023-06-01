import React, { useEffect } from "react";
import "@/style/Features.scss";
import {
  MdOutlineExplore as Explore,
  MdTrendingUp as Points,
  MdPercent as Percentage,
  MdQuestionAnswer as Dialog,
} from "react-icons/md";
import { BiBrain as Brain, BiLeaf as Sustainabilty } from "react-icons/bi";
import { GiAchievement as Achievement } from "react-icons/gi";
import { TiWeatherCloudy as Weather } from "react-icons/ti";
import { GoLaw as Law } from "react-icons/go";
import {
  BsDoorOpenFill as EscapeRoom,
  BsUniversalAccess as Accessibility,
  BsShieldFillCheck as Privacy,
} from "react-icons/bs";
import { IoEarth as Icon } from "react-icons/io5";

function Features() {
  const features = [
    {
      icon: <Explore className="current-feature-icon" />,
      headline: "Erkunde Städte",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde iusto aspernatur quod porro totam, hic dolorem illo beatae aut expedita at pariatur eos voluptatem doloremque quaerat facilis! Nobis, est qui.",
    },
    {
      icon: <Points className="current-feature-icon" />,
      headline: "Sammle Punkte",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde iusto aspernatur quod porro totam, hic dolorem illo beatae aut expedita at pariatur eos voluptatem doloremque quaerat facilis! Nobis, est qui.",
    },
    {
      icon: <Brain className="current-feature-icon" />,
      headline: "Lerne Neues",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde iusto aspernatur quod porro totam, hic dolorem illo beatae aut expedita at pariatur eos voluptatem doloremque quaerat facilis! Nobis, est qui.",
    },
    {
      icon: <Percentage className="current-feature-icon" />,
      headline: "Spare Geld",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde iusto aspernatur quod porro totam, hic dolorem illo beatae aut expedita at pariatur eos voluptatem doloremque quaerat facilis! Nobis, est qui.",
    },
    {
      icon: <Dialog className="current-feature-icon" />,
      headline: "Austausch mit Freunden",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde iusto aspernatur quod porro totam, hic dolorem illo beatae aut expedita at pariatur eos voluptatem doloremque quaerat facilis! Nobis, est qui.",
    },
    {
      icon: <Achievement className="current-feature-icon" />,
      headline: "Verdiene Abzeichen",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde iusto aspernatur quod porro totam, hic dolorem illo beatae aut expedita at pariatur eos voluptatem doloremque quaerat facilis! Nobis, est qui.",
    },
  ];

  const roadmap = [
    {
      icon: <Sustainabilty className="roadmap-icon" />,
      headline: "Nachhaltigkeit",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam soluta, quae quod praesentium tempore aliquam facere quasi atque dolorum quaerat possimus harum quas explicabo laborum nisi, earum itaque deleniti non.",
      quartal: "Q1 23",
    },
    {
      icon: <Weather className="roadmap-icon" />,
      headline: "Wettervorhersagen",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam soluta, quae quod praesentium tempore aliquam facere quasi atque dolorum quaerat possimus harum quas explicabo laborum nisi, earum itaque deleniti non.",
      quartal: "Q1 23",
    },
    {
      icon: <Law className="roadmap-icon" />,
      headline: "Verhaltensregeln",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam soluta, quae quod praesentium tempore aliquam facere quasi atque dolorum quaerat possimus harum quas explicabo laborum nisi, earum itaque deleniti non.",
      quartal: "Q2 23",
    },
    {
      icon: <EscapeRoom className="roadmap-icon" />,
      headline: "Escaperoom-Stories",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam soluta, quae quod praesentium tempore aliquam facere quasi atque dolorum quaerat possimus harum quas explicabo laborum nisi, earum itaque deleniti non.",
      quartal: "Q3 23",
    },
    {
      icon: <Accessibility className="roadmap-icon" />,
      headline: "Barrierefreiheit",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam soluta, quae quod praesentium tempore aliquam facere quasi atque dolorum quaerat possimus harum quas explicabo laborum nisi, earum itaque deleniti non.",
      quartal: "Q3 23",
    },
    {
      icon: <Privacy className="roadmap-icon" />,
      headline: "Datenschutz",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam soluta, quae quod praesentium tempore aliquam facere quasi atque dolorum quaerat possimus harum quas explicabo laborum nisi, earum itaque deleniti non.",
      quartal: "Q4 23",
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="features-container">
      <div className="features-header">
        <h2>Features</h2>
      </div>
      <div className="current-features">
        <div className="current-features-container">
          {features.map((item, index) => (
            <div key={item.headline + index} className="feature-card">
              <div className="feature-card-inner">
                <div className="feature-card-front-container">
                  {item.icon}
                  <span>{item.headline}</span>
                </div>
                <div className="feature-card-back-container">
                  <span>{item.content}</span>
                </div>
              </div>
            </div>
          ))}
          ;
        </div>
      </div>
      <div className="roadmap-features">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
            <div className="roadmap-features-container">
              <h2 className="roadmap-header">Roadmap</h2>
              {roadmap.map((item, index) => (
                <div key={item.headline + index} className="roadmap-feature">
                  <div className="roadmap-feature-container">
                    {item.icon}
                    <div className="roadmap-description">
                      <span className="description-header">
                        {item.headline}
                      </span>
                      <span className="description-text">{item.content}</span>
                    </div>
                    <div className="roadmap-date">
                      <span>{item.quartal}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
