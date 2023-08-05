import profile__photo  from "../img/profile__photo.jpg";
import { AiFillGithub  as GitHubSVG, AiFillHtml5 as HtmlSVG} from 'react-icons/ai';
import { BsTelegram  as TelegramSVG, BsLinkedin  as LinkedSVG} from 'react-icons/bs';
import { SiGmail  as GmailSVG} from 'react-icons/si';
import { BiLogoSass  as SassSVG, BiLogoJavascript as JsSVG, BiLogoReact as ReactSVG} from 'react-icons/bi';
import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import {Animation} from '../component/Animation'

export const Resume = () => {
    const {t} = useTranslation();

  return (
    <div className="wrapper__information">
      <div className="first__block">
        <div>
          <p className="blocks__title">{t('main.title__name')}</p>
          <div className="first__block-description">{t('main.description')}</div>
        </div>
        <div className="first__block-img">
            <img className="img__profile" src={profile__photo} alt="myimg" />
            <div className="img__text">Frontend {t('main.developer')}</div>
        </div>
        <div className="first__block-contact">
            <div className="contact__title">{t('main.contact')}</div>
            <ul className="contact__list">
                <li className="contact__item">
                    <a href="https://github.com/VladislavAnkudo" className="contact__item-links" target='_blank'>
                        <div className="contact__item-link">
                            <div><GitHubSVG/></div>
                            <div>VladislavAnkudo</div>
                        </div>
                    </a>
                </li>
                <li className="contact__item">
                    <a href="https://t.me/vladislavAnk" className="contact__item-links" target='_blank'>
                        <div className="contact__item-link">
                            <div><TelegramSVG/></div>
                            <div>vladislavAnk</div>
                        </div>
                    </a>
                </li>
                <li className="contact__item">
                    <a href="mailto:vladislavankudo@gmail.com" className="contact__item-links" target='_blank'>
                        <div className="contact__item-link">
                            <div><GmailSVG/></div>
                            <div>vladislavankudo@gmail.com</div>
                        </div>
                    </a>
                </li>
                <li className="contact__item">
                    <a href="https://www.linkedin.com/in/vladislav-ankudo-257b78275/" className="contact__item-links" target='_blank'>
                        <div className="contact__item-link">
                            <div><LinkedSVG/></div>
                            <div>Vladislav Ankudo</div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
      </div>
      <div className="second__block">
        <p className="blocks__title">{t('main.skills')}</p>
        <div className="secnond__block-skills">
            <ul className="second__block-list">
                <li className="second__block-item">
                    <div className="contact__item-link contact__item-second">
                        <div><HtmlSVG/></div>
                        <div>HTML5</div>
                    </div>
                </li>
                <li className="second__block-item">
                    <div className="contact__item-link contact__item-second">
                        <div><SassSVG/></div>
                        <div>CSS / SCSS</div>
                    </div>
                </li>
                <li className="second__block-item">
                    <div className="contact__item-link contact__item-second">
                        <div><JsSVG/></div>
                        <div>JavaScript</div>
                    </div>
                </li>
                <li className="second__block-item">
                    <div className="contact__item-link contact__item-second">
                        <div><ReactSVG/></div>
                        <div>React</div>
                    </div>
                </li>
            </ul>
            <div className="second__block-backend">{t('main.backend')} <span className="spans__weight">{t('main.backend__second')}</span>. {t('main.backend__three')} <span className="spans__weight">SQL</span> {t('main.backend__four')} <span className="spans__weight">PostgreSQL</span>.</div>
        </div>
      </div>
      <div className="three__block">
        <div className="block__lang">
            <div className="three__block-title">{t('main.language')}</div>
            <div>{t('main.rus')}</div>
            <div style={{'marginTop':'10px'}}>{t('main.eng')}</div>
        </div>
        <div className="block__lang">
            <div className="three__block-title">{t('main.studies')}</div>
            <div>{t('main.college')}</div>
        </div>
      </div>
      <Animation/>
    </div>
  );
};

export default function WrappedResume(){
    return(
        <Suspense fallback='...loading'>
            <Resume/>
        </Suspense>
    )
}