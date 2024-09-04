import { Link } from "react-router-dom"

function ButtonGitHub({link}){
    return(
        <div>
            <Link to={link} style={{marginRight:"30px"}} target="__blank">VER NO GIT HUB</Link>
        </div>
    )
}

export default ButtonGitHub