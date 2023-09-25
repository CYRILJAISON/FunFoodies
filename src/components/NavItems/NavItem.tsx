import style from './NavItem.module.css';

interface INavItem {
    title: string;
    url: string;
}

const NavItem = ({title, url}: INavItem) => {
    return (
        <>
        <li className={`${"col-md"} ${style.navitem}`}>
            <a href={url}>{title}</a>
        </li>
        </>
    )
}

export { NavItem };