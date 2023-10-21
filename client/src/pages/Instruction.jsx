import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const Instruction = () => {
    const navigate = useNavigate();
    return (
        <div className="page-container"> 
            <div className="page-button" >
                <BsArrowLeft size={25} onClick={()=>navigate(-1)} />
            </div>
            <div className="headliner"> 
                <h1 className="headliner-content"> INSTRUCTION </h1>
            </div>
        </div>
    )
}

export default Instruction;