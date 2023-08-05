import {Link} from "react-router-dom"
import { useTranslation } from "react-i18next";
import { FaRegFolderOpen  as FolderSVG} from 'react-icons/fa';
import { MdOutlineLanguage  as LanguageSVG} from 'react-icons/md';

const locales = {
    en: {title: 'ENG'},
    ru: {title: 'РУС'},
};

export const Header = () =>{

    const {t ,i18n} = useTranslation();

    return (
        <div className='header__link-switch'>
            <Link to="/projects" className="header__links-nav">
                <FolderSVG/>
                {t('main.myproject')}
            </Link>
            <div style={{ display: "flex", position: "relative", color: 'white'}}>
                <LanguageSVG style={{width:'27.3px', height:'27.3px', marginRight:'9px'}}/>
                {Object.keys(locales).map((local) => (
                  <div key={local}>
                    <button
                      className={`language-button ${i18n.resolvedLanguage === local ? 'active bold' : 'normal'}`}
                      type="button"
                      onClick={() => i18n.changeLanguage(local)}
                    >
                      {locales[local].title}
                    </button>
                  </div>
                ))}
                <div className="line"></div>
            </div>
        </div>
    )
}