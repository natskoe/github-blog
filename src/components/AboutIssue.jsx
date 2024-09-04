import ButtonBack from "./ButtonBack"
import ButtonGitHub from "./ButtonGitHub"
import Info from "./Info"
import github_icon from "../assets/img/github.png"
import calendar from "../assets/img/calendar.png"
import comment from "../assets/img/comment.png"
import "../styles/home/about-issue.css"


function AboutIssue({link, titleIssue, username, date, comments}){
    return(
        <div className="card-issue">
            <div className="menu">
                <ButtonBack></ButtonBack>
                <ButtonGitHub link={link}></ButtonGitHub>
            </div>
            <h1 className="title">{titleIssue}</h1>
            <div className="info">
                <Info icon={github_icon} text={username}/>
                <Info icon={calendar} text={date}/>
                <Info icon={comment} text={comments}/>
            </div>
        </div>
    )
}

export default AboutIssue