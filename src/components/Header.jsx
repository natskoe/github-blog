import cmd from "../assets/img/cmd.png"

function Header(){
    return(
        <header>
            <figure>
                <img src={cmd}/>
            </figure>
            <span>
                GITHUB BLOG
            </span>
        </header>
    )
}

export default Header