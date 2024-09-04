import { Link } from "react-router-dom"
import Info from "./Info"
import github_icon from "../assets/img/github.png"
import company_icon from "../assets/img/building.png"
import followers_icon from "../assets/img/followers.png"

function CardProfile({img, link, name, username, bio, company, followers}){
    return(
        <>
           <div>
                <figure>
                    <img src={img}/>
                </figure>
                <div>
                    <div>
                        <h1>{name}</h1>
                        <Link to={link} target="_blank">GITHUB</Link>
                    </div>
                    <div>
                        <p>{bio}</p>
                    </div>
                    <div>
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