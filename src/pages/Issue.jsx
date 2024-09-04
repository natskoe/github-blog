import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import AboutIssue from "../components/AboutIssue"
import DescriptionIssue from "../components/DescriptionIssue"

function Issue(){

    const { issueId } = useParams();
    const [issue, setIssue] = useState("");

    function getDate(dateString) {
        const currentDate = new Date();
        const targetDate = new Date(dateString);
        const differenceInTime = currentDate - targetDate;
        const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
        
        return new Intl.RelativeTimeFormat('pt-BR', {
            numeric: "auto"
        }).format(-differenceInDays, 'day');
    }

    useEffect(()=>{
        fetch(`https://api.github.com/repos/natskoe/github-blog/issues/${issueId}`).then((response)=>{
            response.json().then((data)=>{
                console.log(data)
                setIssue(data)
            })
        })  
    },[issueId]) 

    console.log(issueId)

    if(!issue){
        return(
         <div> Carregando... </div>
        ) 
     }

    return(
        <div> 
            <AboutIssue link={issue.html_url} titleIssue={issue.title} username={issue.user.login} date={getDate(issue.updated_at)} comments={issue.comments}></AboutIssue>
            <DescriptionIssue description={issue.body}></DescriptionIssue>
        </div>
    )
}
export default Issue