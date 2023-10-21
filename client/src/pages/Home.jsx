import Button from "../components/Button";
import {HiArrowLongDown} from "react-icons/hi2";
import RotateScroll from '../assets/rotatescroll.svg'
const Home = () => {
    return (
        <div className="homepage"> 
            <div className="homepage-headliner"> 
                <h1 className="headliner-content"> GAUSSISCAPE </h1>
                <div>
                    <img src={RotateScroll} alt="rotate to scroll" className="rotate-scroll"/>
                    {/* <HiArrowLongDown size={25} className="rotate-scroll-icon"/> */}
                </div>
            </div>
            <div className="home-buttons">
                <Button to = "/mainpage"> START </Button>
                <Button to="/instruction"> INSTRUCTION </Button>
            </div>
        </div>
    )
}

export default Home;