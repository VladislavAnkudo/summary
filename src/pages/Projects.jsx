import { NavLink } from "react-router-dom";
import { Animation } from "../component/Animation";
import { useTranslation } from "react-i18next";
import { HiOutlineArrowNarrowLeft as LanguageSVG } from "react-icons/hi";
import { AiFillHtml5 as HtmlSVG } from "react-icons/ai";
import { SiAxios as AxiosSVG, SiMobx as MobxSVG, SiExpress as ExpressSVG } from "react-icons/si";
import {
  BiLogoSass as SassSVG,
  BiLogoJavascript as JsSVG,
  BiLogoReact as ReactSVG,
  BiGitRepoForked as RepoSVG,
  BiShow as ShowSVG,
} from "react-icons/bi";

import Slider from "react-slick";
import first__project1 from "../img/first__project1.jpg";
import first__project2 from "../img/first__project2.png";
import first__project3 from "../img/first__project3.png";
import first__project4 from "../img/first__project4.png";
import first__project5 from "../img/first__project5.png";
import first__project6 from "../img/first__project6.png";

import second__project1 from "../img/second__project1.png";
import second__project2 from "../img/second__project2.png";
import second__project3 from "../img/second__project3.png";
import second__project4 from "../img/second__project4.png";

import three__project1 from "../img/three__project1.png";
import three__project2 from "../img/three__project2.png";
import three__project3 from "../img/three__project3.png";
import three__project4 from "../img/three__project4.png";

import four__project1 from "../img/four__project1.png";
import four__project2 from "../img/four__project2.png";
import four__project3 from "../img/four__project3.png";

import five__project1 from "../img/five__project1.png";
import five__project2 from "../img/five__project2.png";
import five__project3 from "../img/five__project3.png";
import five__project4 from "../img/five__project4.png";

import six__project1 from "../img/six__project1.png";
import six__project2 from "../img/six__project2.png";

import seven__project1 from "../img/seven__project1.png";
import seven__project2 from "../img/seven__project2.png";

export const Projects = () => {
  const { t } = useTranslation();
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="wrapper__information">
      <NavLink
        to="/"
        className="header__links-nav"
        style={{ fontSize: "20px", display: 'inline'}}
      >
        <span>
        <LanguageSVG style={{verticalAlign: 'middle', marginRight:'5px'}} />
        {t("main.goback")}
        </span>
      </NavLink>
      <div className="full__sliders">
        <div className="one__proect">
          <div className="slider__title">COMPUTER STORE</div>
          <div className="projects__links">
            <NavLink to='https://github.com/VladislavAnkudo/computer-store' target='_blank' className="projects__link">
              <RepoSVG />
              {t("main.repo")}
            </NavLink>
          </div>
          <div>
            <Slider {...settings} className="slider__settings">
              <img src={first__project1} alt="slider__img" className="slider__img"/>
              <img src={first__project2} alt="slider__img" className="slider__img"/>
              <img src={first__project3} alt="slider__img" className="slider__img"/>
              <img src={first__project4} alt="slider__img" className="slider__img"/>
              <img src={first__project5} alt="slider__img" className="slider__img"/>
              <img src={first__project6} alt="slider__img" className="slider__img"/>
            </Slider>
          </div>
          <ul className="projects-nav__list">
            <li className="projects-nav__item">
              <ReactSVG/>
              React
            </li>
            <li className="projects-nav__item">
              <JsSVG/>
              JavaScript
            </li>
            <li className="projects-nav__item">
              <SassSVG/>
              CSS
            </li>
            <li className="projects-nav__item">
              <AxiosSVG/>
              Axios
            </li>
            <li className="projects-nav__item">
              <MobxSVG/>
              MobX
            </li>
            <li className="projects-nav__item">
              <ExpressSVG/>
              Express
            </li>
          </ul>
        </div>
        <div className="one__proect">
          <div className="slider__title">FA-FO</div>
          <div className="projects__links">
            <NavLink to='https://github.com/VladislavAnkudo/fa-fo/' target="_blank" className="projects__link">
              <RepoSVG />
              {t("main.repo")}
            </NavLink>
            <NavLink to='https://vladislavankudo.github.io/fa-fo/fafos/pages/home/' target="_blank" className="projects__link">
              <ShowSVG />
              {t("main.demo")}
            </NavLink>
          </div>
          <div>
            <Slider {...settings} className="slider__settings">
              <img src={second__project1} alt="slider__img" className="slider__img"/>
              <img src={second__project2} alt="slider__img" className="slider__img"/>
              <img src={second__project3} alt="slider__img" className="slider__img"/>
              <img src={second__project4} alt="slider__img" className="slider__img"/>
            </Slider>
          </div>
          <ul className="projects-nav__list">
            <li className="projects-nav__item">
              <HtmlSVG/>
              HTML
            </li>
            <li className="projects-nav__item">
              <JsSVG/>
              JavaScript
            </li>
            <li className="projects-nav__item">
              <SassSVG/>
              SCSS
            </li>
          </ul>
        </div>
        <div className="one__proect">
          <div className="slider__title">PLANTS</div>
          <div className="projects__links">
            <NavLink to='https://github.com/VladislavAnkudo/Plants' target="_blank" className="projects__link">
              <RepoSVG />
              {t("main.repo")}
            </NavLink>
            <NavLink to='https://vladislavankudo.github.io/Plants/plants/pages/home/index.html' target='_blank' className="projects__link">
              <ShowSVG />
              {t("main.demo")}
            </NavLink>
          </div>
          <div>
            <Slider {...settings} className="slider__settings">
              <img src={three__project1} alt="slider__img" className="slider__img"/>
              <img src={three__project2} alt="slider__img" className="slider__img"/>
              <img src={three__project3} alt="slider__img" className="slider__img"/>
              <img src={three__project4} alt="slider__img" className="slider__img"/>
            </Slider>
          </div>
          <ul className="projects-nav__list">
            <li className="projects-nav__item">
              <HtmlSVG/>
              HTML
            </li>
            <li className="projects-nav__item">
              <JsSVG/>
              JavaScript
            </li>
            <li className="projects-nav__item">
              <SassSVG/>
              SCSS
            </li>
          </ul>
        </div>
        <div className="one__proect">
          <div className="slider__title">SHELTER</div>
          <div className="projects__links">
            <NavLink to='https://github.com/VladislavAnkudo/shelter' target='_blank' className="projects__link">
              <RepoSVG />
              {t("main.repo")}
            </NavLink>
            <NavLink to='https://vladislavankudo.github.io/shelter/shelter/pages/home/index.html' target="_blank" className="projects__link">
              <ShowSVG />
              {t("main.demo")}
            </NavLink>
          </div>
          <div>
            <Slider {...settings} className="slider__settings">
              <img src={four__project1} alt="slider__img" className="slider__img"/>
              <img src={four__project2} alt="slider__img" className="slider__img"/>
              <img src={four__project3} alt="slider__img" className="slider__img"/>
            </Slider>
          </div>
          <ul className="projects-nav__list">
            <li className="projects-nav__item">
              <HtmlSVG/>
              HTML
            </li>
            <li className="projects-nav__item">
              <JsSVG/>
              JavaScript
            </li>
            <li className="projects-nav__item">
              <SassSVG/>
              SCSS
            </li>
          </ul>
        </div>
        <div className="one__proect">
          <div className="slider__title">QUBIT</div>
          <div className="projects__links">
            <NavLink to='https://github.com/VladislavAnkudo/qubit' target='_blank' className="projects__link">
              <RepoSVG />
              {t("main.repo")}
            </NavLink>
            <NavLink to='https://vladislavankudo.github.io/qubit/' target='_blank' className="projects__link">
              <ShowSVG/>
              {t("main.demo")}
            </NavLink>
          </div>
          <div>
            <Slider {...settings} className="slider__settings">
              <img src={five__project1} alt="slider__img" className="slider__img"/>
              <img src={five__project2} alt="slider__img" className="slider__img"/>
              <img src={five__project3} alt="slider__img" className="slider__img"/>
              <img src={five__project4} alt="slider__img" className="slider__img"/>
            </Slider>
          </div>
          <ul className="projects-nav__list">
            <li className="projects-nav__item">
              <HtmlSVG/>
              HTML
            </li>
            <li className="projects-nav__item">
              <JsSVG/>
              JavaScript
            </li>
            <li className="projects-nav__item">
              <SassSVG/>
              SCSS
            </li>
          </ul>
        </div>
        <div className="one__proect">
          <div className="slider__title">MOMENTUM</div>
          <div className="projects__links">
            <NavLink to='https://github.com/VladislavAnkudo/momentum' target='_blank' className="projects__link">
              <RepoSVG />
              {t("main.repo")}
            </NavLink>
            <NavLink to='https://vladislavankudo.github.io/momentum/' target='_blank' className="projects__link">
              <ShowSVG />
              {t("main.demo")}
            </NavLink>
          </div>
          <div>
            <Slider {...settings} className="slider__settings">
              <img src={six__project2} alt="slider__img" className="slider__img"/>
              <img src={six__project1} alt="slider__img" className="slider__img"/>
            </Slider>
          </div>
          <ul className="projects-nav__list">
            <li className="projects-nav__item">
              <HtmlSVG/>
              HTML
            </li>
            <li className="projects-nav__item">
              <JsSVG/>
              JavaScript
            </li>
            <li className="projects-nav__item">
              <SassSVG/>
              CSS
            </li>
          </ul>
        </div>
        <div className="one__proect">
          <div className="slider__title">CV</div>
          <div className="projects__links">
            <NavLink to='https://github.com/VladislavAnkudo/summary' target='_blank' className="projects__link">
              <RepoSVG />
              {t("main.repo")}
            </NavLink>
            <NavLink to='https://summary-lilac.vercel.app/' target='_blank' className="projects__link">
              <ShowSVG />
              {t("main.demo")}
            </NavLink>
          </div>
          <div>
            <Slider {...settings} className="slider__settings">
              <img src={seven__project1} alt="slider__img" className="slider__img"/>
              <img src={seven__project2} alt="slider__img" className="slider__img"/>
            </Slider>
          </div>
          <ul className="projects-nav__list">
            <li className="projects-nav__item">
              <ReactSVG/>
              React
            </li>
            <li className="projects-nav__item">
              <JsSVG/>
              JavaScript
            </li>
            <li className="projects-nav__item">
              <SassSVG/>
              CSS
            </li>
          </ul>
        </div>
      </div>
      <Animation />
    </div>
  );
};