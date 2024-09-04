import { Link } from "react-router-dom"
import Info from "./Info"
import github_icon from "../assets/img/github.png"
import company_icon from "../assets/img/building.png"
import followers_icon from "../assets/img/followers.png"
import "../styles/home/card-profile.css"
import { FaExternalLinkAlt } from "react-icons/fa";

function CardProfile({img, link, name, username, bio, company, followers}){
    return(
        <>
           <div className= "card-profile">
                <figure>
                    <img className = "image-profile" src={img}/>
                </figure>
                <div className="content">
                    <div className="name_git">
                        <h1>{name}</h1>
                        <div className="github_redirect">
                            <Link className="link" to={link} target="_blank">GITHUB</Link>
                            <FaExternalLinkAlt />
                        </div> 
                    </div>
                    
                    <div className="bio">
                        <p>{bio}</p>
                    </div>
                    <div className="icons">
                        <Info icon={github_icon} text={username}/>
                        <Info icon={company_icon} text={company}/>
                        <Info icon={followers_icon} text={followers}/>
                    </div>
                    
                </div>
            </div> 
        </>
    )
}
export default CardProfile