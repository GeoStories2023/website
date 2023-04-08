import React from 'react'
import "@/style/Features.scss";
import {
    MdOutlineExplore as Explore,
    MdTrendingUp as Points,
    MdPercent as Percentage,
    MdQuestionAnswer as Dialog,
} from "react-icons/md";
import {
  BiBrain as Brain,
  BiLeaf as Sustainabilty,
} from "react-icons/bi"
import {
  GiAchievement as Achievement,
} from "react-icons/gi";

function Features() {
  return (
    <div className="features-container">
      <div className="features-header">
        <span>Features</span>
      </div>
      <div className="current-features">
        <div className="current-features-container">
          <div className="feature-card">
            <div className="feature-card-inner">
              <div className="feature-card-front-container">
                <Explore className="current-feature-icon"/>
                <span>Erkunde Städte</span>
              </div>
              <div className="feature-card-back-container">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde iusto aspernatur quod porro totam, hic dolorem illo beatae aut expedita at pariatur eos voluptatem doloremque quaerat facilis! Nobis, est qui.</span>
              </div>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-card-inner">
              <div className="feature-card-front-container">
                <Points className="current-feature-icon"/>
                <span>Sammle Punkte</span>
              </div>
              <div className="feature-card-back-container">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde iusto aspernatur quod porro totam, hic dolorem illo beatae aut expedita at pariatur eos voluptatem doloremque quaerat facilis! Nobis, est qui.</span>
              </div>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-card-inner">
              <div className="feature-card-front-container">
                <Brain className="current-feature-icon"/>
                <span>Lerne Neues</span>
              </div>
              <div className="feature-card-back-container">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde iusto aspernatur quod porro totam, hic dolorem illo beatae aut expedita at pariatur eos voluptatem doloremque quaerat facilis! Nobis, est qui.</span>
              </div>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-card-inner">
              <div className="feature-card-front-container">
                <Percentage className="current-feature-icon"/>
                <span>Spare Geld</span>
              </div>
              <div className="feature-card-back-container">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde iusto aspernatur quod porro totam, hic dolorem illo beatae aut expedita at pariatur eos voluptatem doloremque quaerat facilis! Nobis, est qui.</span>
              </div>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-card-inner">
              <div className="feature-card-front-container">
                <Dialog className="current-feature-icon"/>
                <span>Austausch mit Freunden</span>
              </div>
              <div className="feature-card-back-container">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde iusto aspernatur quod porro totam, hic dolorem illo beatae aut expedita at pariatur eos voluptatem doloremque quaerat facilis! Nobis, est qui.</span>
              </div>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-card-inner">
              <div className="feature-card-front-container">
                <Achievement className="current-feature-icon"/>
                <span>Verdiene Abzeichen</span>
              </div>
              <div className="feature-card-back-container">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde iusto aspernatur quod porro totam, hic dolorem illo beatae aut expedita at pariatur eos voluptatem doloremque quaerat facilis! Nobis, est qui.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="roadmap-features">
        <div className="roadmap-features-container">
          <span className="roadmap-header">Roadmap</span>
          <div className="roadmap-feature">
            <div className="roadmap-feature-container">
              <Sustainabilty className="roadmap-icon" />
              <div className="roadmap-description">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam soluta, quae quod praesentium tempore aliquam facere quasi atque dolorum quaerat possimus harum quas explicabo laborum nisi, earum itaque deleniti non.</span>
              </div>
              <div className="roadmap-date">
                <span>Q1 23</span>
              </div>
            </div>
          </div>
          <div className="roadmap-feature">
            <div className="roadmap-feature-container">
              <Sustainabilty className="roadmap-icon" />
              <div className="roadmap-description">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam soluta, quae quod praesentium tempore aliquam facere quasi atque dolorum quaerat possimus harum quas explicabo laborum nisi, earum itaque deleniti non.</span>
              </div>
              <div className="roadmap-date">
                <span>Q1 23</span>
              </div>
            </div>
          </div>
          <div className="roadmap-feature">
            <div className="roadmap-feature-container">
              <Sustainabilty className="roadmap-icon" />
              <div className="roadmap-description">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam soluta, quae quod praesentium tempore aliquam facere quasi atque dolorum quaerat possimus harum quas explicabo laborum nisi, earum itaque deleniti non.</span>
              </div>
              <div className="roadmap-date">
                <span>Q1 23</span>
              </div>
            </div>
          </div>
          <div className="roadmap-feature">
            <div className="roadmap-feature-container">
              <Sustainabilty className="roadmap-icon" />
              <div className="roadmap-description">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam soluta, quae quod praesentium tempore aliquam facere quasi atque dolorum quaerat possimus harum quas explicabo laborum nisi, earum itaque deleniti non.</span>
              </div>
              <div className="roadmap-date">
                <span>Q1 23</span>
              </div>
            </div>
          </div>
          <div className="roadmap-feature">
            <div className="roadmap-feature-container">
              <Sustainabilty className="roadmap-icon" />
              <div className="roadmap-description">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam soluta, quae quod praesentium tempore aliquam facere quasi atque dolorum quaerat possimus harum quas explicabo laborum nisi, earum itaque deleniti non.</span>
              </div>
              <div className="roadmap-date">
                <span>Q1 23</span>
              </div>
            </div>
          </div>
          <div className="roadmap-feature">
            <div className="roadmap-feature-container">
              <Sustainabilty className="roadmap-icon" />
              <div className="roadmap-description">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam soluta, quae quod praesentium tempore aliquam facere quasi atque dolorum quaerat possimus harum quas explicabo laborum nisi, earum itaque deleniti non.</span>
              </div>
              <div className="roadmap-date">
                <span>Q1 23</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features;