function Info({icon, text}){
    return(
        <div>
            <figure>
                <img src={icon}/>
            </figure>
            <span>{text}</span>
        </div>
    )
}

export default Info