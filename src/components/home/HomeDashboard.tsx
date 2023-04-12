import React from "react";
import "@/style/HomeDashboard.scss";
import { User } from "@/types/General";
import northAmerica from "@/assets/img-dashboard/continent-northamerica.svg";
import southAmerica from "@/assets/img-dashboard/continent-southamerica.svg";
import europe from "@/assets/img-dashboard/continent-europe.svg";
import africa from "@/assets/img-dashboard/continent-africa.svg";
import asia from "@/assets/img-dashboard/continent-asia.svg";
import oceania from "@/assets/img-dashboard/continent-oceania.svg";
import {BsJournalRichtext as Diary,
        BsFillPeopleFill as Friends,
        BsFillStarFill as Favourites
} from "react-icons/bs";
import {SlBadge as Badges} from "react-icons/sl";

function HomeDashboard({ user }: { user: User }) {
  return (
    <div className="home-dashboard-container">
      <div className="menu-left">
          <Diary className="icon"/>
          <Friends className="icon"/>
          <Favourites className="icon"/>
          <Badges className="icon" />
    </div>
      <div className="home-dashboard-header">
        <span>Hallo Max, bereit für dein nächstes Abenteuer?</span>
      </div>
      <div className="news">
        <div className="news-container">
          <span>News</span>
          <section id="slider">
            <input type="radio" name="slider" id="s1" checked/>
            <input type="radio" name="slider" id="s2" />
            <input type="radio" name="slider" id="s3" />
            <input type="radio" name="slider" id="s4" />
            <input type="radio" name="slider" id="s5" />

            <label htmlFor="s1" id="slide1">
              <img src="https://i.pinimg.com/originals/2b/de/de/2bdede0647e3cdf75b44ea33723201d9.jpg" alt="" />
            </label>
            <label htmlFor="s2" id="slide2">
              <img src="https://images6.alphacoders.com/462/thumb-1920-462371.jpg" alt=""/>
            </label>
            <label htmlFor="s3" id="slide3">
              <img src="https://wallpaperaccess.com/full/1154341.jpg" alt=""/>
            </label>
            <label htmlFor="s4" id="slide4">
              <img src="https://wallpapercave.com/wp/wp2634222.jpg" alt=""/>
            </label>
            <label htmlFor="s5" id="slide5">
              <img src="https://images5.alphacoders.com/343/thumb-1920-343645.jpg" alt=""/>
            </label>
          </section>
        </div>
      </div>
      <div className="seperator">

      </div>
      <div className="tours">
        <div className="tours-container">
        <span>Mögliche Kapitel für deine nächste Geschichte</span>
        <section id="slider">
            <input type="radio" name="slider" id="s1" />
            <input type="radio" name="slider" id="s2" />
            <input type="radio" name="slider" id="s3" />
            <input type="radio" name="slider" id="s4" />
            <input type="radio" name="slider" id="s5" />

            <label htmlFor="s1" id="slide1">
              <img src="https://i.pinimg.com/originals/2b/de/de/2bdede0647e3cdf75b44ea33723201d9.jpg" alt="" />
            </label>
            <label htmlFor="s2" id="slide2">
              <img src="https://images6.alphacoders.com/462/thumb-1920-462371.jpg" alt=""/>
            </label>
            <label htmlFor="s3" id="slide3">
              <img src="https://wallpaperaccess.com/full/1154341.jpg" alt=""/>
            </label>
            <label htmlFor="s4" id="slide4">
              <img src="https://wallpapercave.com/wp/wp2634222.jpg" alt=""/>
            </label>
            <label htmlFor="s5" id="slide5">
              <img src="https://images5.alphacoders.com/343/thumb-1920-343645.jpg" alt=""/>
            </label>
          </section>
        </div>
      </div>
      <div className="seperator">

      </div>
      <div className="continents">
        <div className="continents-header">
          <span>Wähle den Kontinent für dein nächstes Reiseziel</span>
        </div>
        <div className="continents-button-container">
          <div className="america">
            <div className="north-america">
              <button><img src={northAmerica} alt="North America" /></button>
              <span>Nordamerika</span>
            </div>
            <div className="south-america">
              <button><img src={southAmerica} alt="South America" /></button>
              <span>Südamerika</span>
            </div>
          </div>
          <div className="europe-africa">
            <div className="europe">
              <button><img src={europe} alt="Europe" /></button>
              <span>Europa</span>
            </div>
            <div className="africa">
              <button><img src={africa} alt="Africa" /></button>
              <span>Südamerika</span>
            </div>
          </div>
          <div className="asia-oceania">
            <div className="asia">
              <button><img src={asia} alt="Asia" /></button>
              <span>Asien</span>
            </div>
            <div className="oceania">
              <button><img src={oceania} alt="Oceania" /></button>
              <span>Ozeaninen</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeDashboard;
