import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import {HiArrowLongDown}    from "react-icons/hi2";
import RotateScroll from '../assets/rotatescroll.svg'
const Instruction = () => {
    const navigate = useNavigate();
    return (
        <div className="page-container">
            <div className="">
                <div className="page-button" >
                    <BsArrowLeft size={25} onClick={()=>navigate(-1)} />
                </div>
            </div>

        </div>
    )
}

export default Instruction;