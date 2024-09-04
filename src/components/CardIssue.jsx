import "../styles/home/card-issue.css"

function CardIssue({title, text, date}){
    return(
                <div className="card">
                <div className="title">
                    <span>{title}</span>
                    <span className="date">{date}</span>
                </div>
                <div className="text">
                    <p>{text}</p>
                </div>
            </div>
    )
}

export default CardIssue