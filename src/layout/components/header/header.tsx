import s from './header.module.scss'
import logo from '../../../assets/logo.svg'
import {Link} from "react-router";
import {MAIN} from "../../../shared/path.ts";
import {memo} from "react";

export const Header = memo(() => {
    return (
        <div className={s.container_header}>
            <div>
                <img src={logo} className={s.logo} alt="логотип"/>
            </div>
            <h2 className={s.title_header}>В нашем приложении вы можете найти информацию о любом актёре Голливуда</h2>
            <Link to={MAIN}><span className={s.link}>На главную</span></Link>
        </div>
    );
});
