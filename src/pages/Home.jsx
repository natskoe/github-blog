import { useEffect, useState } from "react"
import CardIssue from "../components/CardIssue"
import CardProfile from "../components/CardProfile"
import Search from "../components/Search"
import TitleIssue from "../components/AboutIssue"
import { Link } from "react-router-dom"

function Home(){

    const [user, setUser] = useState(null)
    const [search, setSearch ]= useState("")
    const [issues, setIssues] = useState([])

    function onChangeSearch(event){
        setSearch(event.target.value)
    }

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
        fetch("https://api.github.com/users/natskoe").then((response)=>{
            response.json().then((data)=>{
                console.log(data)
                setUser(data)
            })
        })  
    },[]) 

    useEffect(() => {
        const queryString = '?q=' + encodeURIComponent('repo:natskoe/github-blog');
        fetch(`https://api.github.com/search/issues${queryString}`).then((response)=>{
            response.json().then((data)=>{
                console.log(data)
                setIssues(data.items)
            })
        })
    }, [search])

    if(!user){
       return(
        <div> Carregando... </div>
       ) 
    }
    return(
        <div>
            <CardProfile name={user.name} username={user.login} img={user.avatar_url} link={user.html_url} bio={user.bio} company={user.company} followers={user.followers}/>
            <Search search={search} onChangeSearch={onChangeSearch} num_posts={issues.length}/>
            <div className="flexbox">
            {issues.map((value) => {
                return(
                    <Link to={`/issue/${value.number}`} key={value.id}>
                        <CardIssue key={value.id} title={value.title} text={value.body} date={getDate(value.updated_at)} />
                    </Link>
                )
            })}
            </div>
        </div>
    )
}
export default Home