import Button from "../components/Button";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const MainPage = () => {
    const navigate = useNavigate();

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            // TODO: Handle the file upload logic here.
            // For demonstration purposes, I'm using a mock promise.
            await new Promise((resolve) => setTimeout(resolve, 2000));
            
            // Navigate to the new window/page after the upload is complete
            navigate('/new-window');
        }
    };

    return (
        <div className="mainpage">
            <div className="page-button">
                <BsArrowLeft size={25} onClick={()=>navigate(-1)} />
            </div>
            <div className="home-buttons">
{/*                 
                <Button>
                    UPLOAD
                </Button> */}

                <label className="upload-button">
                    UPLOAD
                    <input 
                        type="file" 
                        style={{ display: 'none' }} 
                        onChange={handleFileChange}
                    />
                </label>

                <Button to="/instruction">
                    INSTRUCTION
                </Button>
            </div>
        </div>
    )

}

export default MainPage;