import Style from './Navbar.module.scss';
 const Navigation = ({menuItems}) => {
    return (
        <>
        <nav className={Style.NavStyle}>
        {menuItems.map((items, index) => {
            return(
            <ul key={index}>
                <li>{items} </li>
                {index < menuItems.length - 1 && <hr />}
            </ul>
            )
        })}
            <h4>Leo-Lov</h4>
        </nav>
        </>
    );
};

export default Navigation; 