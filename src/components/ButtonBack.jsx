import { Link } from "react-router-dom"

function ButtonBack(){
    return(
        <div>
            <Link to="/" style={{marginLeft: "30px"}}>VOLTAR</Link>
        </div>
    )
}

export default ButtonBack