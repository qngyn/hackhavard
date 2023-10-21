import Button from "../components/Button";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const MainPage = () => {
    const navigate = useNavigate();
    return (
        <div className="mainpage">
            <div className="page-button">
                <BsArrowLeft size={25} onClick={()=>navigate(-1)} />
            </div>
            <div className="home-buttons">
                
                <Button>
                    UPLOAD
                </Button>

                <Button to="/instruction">
                    INSTRUCTION
                </Button>
            </div>
        </div>
    )

}

export default MainPage;