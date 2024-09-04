function CardIssue({title, text, date}){
    return(
        <div>
            <div>
                <span>{title}</span>
                <span>{date}</span>
            </div>
            <div>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default CardIssue