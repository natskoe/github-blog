import AboutIssue from "../components/AboutIssue"
import DescriptionIssue from "../components/DescriptionIssue"

function Issue(){
    return(
        <div>
            {/*parameters: link, titleIssue, username, date, comments */}
            <AboutIssue></AboutIssue>
            <DescriptionIssue></DescriptionIssue>
        </div>
    )
}
export default Issue