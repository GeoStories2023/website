import React from "react";
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

function Features() {
  return (
    <div className="features-container">
      <div className="features-header">
        <h2>Features</h2>
      </div>
      <div className="current-features">
        <div className="current-features-container">
          <div className="feature-card">
            <div className="feature-card-inner">
              <div className="feature-card-front-container">
                <Explore className="current-feature-icon" />
                <span>Erkunde Städte</span>
              </div>
              <div className="feature-card-back-container">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  iusto aspernatur quod porro totam, hic dolorem illo beatae aut
                  expedita at pariatur eos voluptatem doloremque quaerat
                  facilis! Nobis, est qui.
                </span>
              </div>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-card-inner">
              <div className="feature-card-front-container">
                <Points className="current-feature-icon" />
                <span>Sammle Punkte</span>
              </div>
              <div className="feature-card-back-container">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  iusto aspernatur quod porro totam, hic dolorem illo beatae aut
                  expedita at pariatur eos voluptatem doloremque quaerat
                  facilis! Nobis, est qui.
                </span>
              </div>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-card-inner">
              <div className="feature-card-front-container">
                <Brain className="current-feature-icon" />
                <span>Lerne Neues</span>
              </div>
              <div className="feature-card-back-container">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  iusto aspernatur quod porro totam, hic dolorem illo beatae aut
                  expedita at pariatur eos voluptatem doloremque quaerat
                  facilis! Nobis, est qui.
                </span>
              </div>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-card-inner">
              <div className="feature-card-front-container">
                <Percentage className="current-feature-icon" />
                <span>Spare Geld</span>
              </div>
              <div className="feature-card-back-container">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  iusto aspernatur quod porro totam, hic dolorem illo beatae aut
                  expedita at pariatur eos voluptatem doloremque quaerat
                  facilis! Nobis, est qui.
                </span>
              </div>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-card-inner">
              <div className="feature-card-front-container">
                <Dialog className="current-feature-icon" />
                <span>Austausch mit Freunden</span>
              </div>
              <div className="feature-card-back-container">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  iusto aspernatur quod porro totam, hic dolorem illo beatae aut
                  expedita at pariatur eos voluptatem doloremque quaerat
                  facilis! Nobis, est qui.
                </span>
              </div>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-card-inner">
              <div className="feature-card-front-container">
                <Achievement className="current-feature-icon" />
                <span>Verdiene Abzeichen</span>
              </div>
              <div className="feature-card-back-container">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  iusto aspernatur quod porro totam, hic dolorem illo beatae aut
                  expedita at pariatur eos voluptatem doloremque quaerat
                  facilis! Nobis, est qui.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="roadmap-features">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
            <div className="roadmap-features-container">
              <h2 className="roadmap-header">Roadmap</h2>
              <div className="roadmap-feature">
                <div className="roadmap-feature-container">
                  <Sustainabilty className="roadmap-icon" />
                  <div className="roadmap-description">
                    <span className="description-header">Nachhaltigkeit</span>
                    <span className="description-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam soluta, quae quod praesentium tempore aliquam facere
                  quasi atque dolorum quaerat possimus harum quas explicabo
                  laborum nisi, earum itaque deleniti non.
                </span>
                  </div>
                  <div className="roadmap-date">
                    <span>Q1 23</span>
                  </div>
                </div>
              </div>
              <div className="roadmap-feature">
                <div className="roadmap-feature-container">
                  <Weather className="roadmap-icon" />
                  <div className="roadmap-description">
                    <span className="description-header">Nachhaltigkeit</span>
                    <span className="description-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam soluta, quae quod praesentium tempore aliquam facere
                  quasi atque dolorum quaerat possimus harum quas explicabo
                  laborum nisi, earum itaque deleniti non.
                </span>
                  </div>
                  <div className="roadmap-date">
                    <span>Q1 23</span>
                  </div>
                </div>
              </div>
              <div className="roadmap-feature">
                <div className="roadmap-feature-container">
                  <Law className="roadmap-icon" />
                  <div className="roadmap-description">
                    <span className="description-header">Nachhaltigkeit</span>
                    <span className="description-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam soluta, quae quod praesentium tempore aliquam facere
                  quasi atque dolorum quaerat possimus harum quas explicabo
                  laborum nisi, earum itaque deleniti non.
                </span>
                  </div>
                  <div className="roadmap-date">
                    <span>Q1 23</span>
                  </div>
                </div>
              </div>
              <div className="roadmap-feature">
                <div className="roadmap-feature-container">
                  <EscapeRoom className="roadmap-icon" />
                  <div className="roadmap-description">
                    <span className="description-header">Nachhaltigkeit</span>
                    <span className="description-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam soluta, quae quod praesentium tempore aliquam facere
                  quasi atque dolorum quaerat possimus harum quas explicabo
                  laborum nisi, earum itaque deleniti non.
                </span>
                  </div>
                  <div className="roadmap-date">
                    <span>Q1 23</span>
                  </div>
                </div>
              </div>
              <div className="roadmap-feature">
                <div className="roadmap-feature-container">
                  <Accessibility className="roadmap-icon" />
                  <div className="roadmap-description">
                    <span className="description-header">Nachhaltigkeit</span>
                    <span className="description-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam soluta, quae quod praesentium tempore aliquam facere
                  quasi atque dolorum quaerat possimus harum quas explicabo
                  laborum nisi, earum itaque deleniti non.
                </span>
                  </div>
                  <div className="roadmap-date">
                    <span>Q1 23</span>
                  </div>
                </div>
              </div>
              <div className="roadmap-feature">
                <div className="roadmap-feature-container">
                  <Privacy className="roadmap-icon" />
                  <div className="roadmap-description">
                    <span className="description-header">Nachhaltigkeit</span>
                    <span className="description-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam soluta, quae quod praesentium tempore aliquam facere
                  quasi atque dolorum quaerat possimus harum quas explicabo
                  laborum nisi, earum itaque deleniti non.
                </span>
                  </div>
                  <div className="roadmap-date">
                    <span>Q1 23</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
