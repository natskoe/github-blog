import cmd from "../assets/img/cmd.png";
import "../styles/home/header.css";
import "../styles/global.css";

function Header(){
    return(
        <header class="header">
                <figure class="figure">
                    <img src={cmd}/>
                </figure>
                <span>
                    GITHUB BLOG
                </span>
        </header>
    )
}

export default Header