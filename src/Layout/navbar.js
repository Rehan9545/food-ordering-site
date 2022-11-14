import classes from "./navbar.module.css"



const Navbar=prop=>{
    return(
         <ul className={classes.navbar}>
            <li>About</li>
            <li>Conact</li>
            <li>Adress</li>
            <li>Logout</li>
         </ul>
    );
}

export default Navbar;