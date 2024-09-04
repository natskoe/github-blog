import "../styles/home/card-profile.css"

function Info({icon, text}){
    return(
        <div className="info">
            <figure>
                <img src={icon}/>
            </figure>
            <span>{text}</span>
        </div>
    )
}

export default Info