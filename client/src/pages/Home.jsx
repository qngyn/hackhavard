import Button from "../components/Button";
import {HiArrowLongDown} from "react-icons/hi2";
import RotateScroll from '../assets/rotatescroll.svg'
const Home = () => {
    return (
        <div className="homepage"> 
            <div className="homepage-headliner"> 
                <div className="headliner-container">
                    <h1 className="headliner-content"> GAUSSISCAPE </h1>
                    <h5 className="subheadliner-content"> THE FUTURE OF GAME DEV TOOL </h5>
                </div>
                <div className="scroll-container">
                    <HiArrowLongDown size={25} className="arrow-down"/>
                    <img src={RotateScroll}  className="rotate-scroll"/>
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