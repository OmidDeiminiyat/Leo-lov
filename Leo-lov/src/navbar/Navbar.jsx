import Style from './Navbar.module.scss';
 const Navigation = ({menuItems}) => {
    
    return (
        <>
        <nav className={Style.NavStyle}>
        {menuItems.map((items, index) => {
            return(
            <ul key={index}>
                <li><a href={items.first}> {items.second}</a> </li>
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