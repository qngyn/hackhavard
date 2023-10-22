import {BsArrowLeft} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
const Introduction = () => {
    const navigate = useNavigate();
    return (
            <div className="page-container"> 
                <div className="page-button" >
                    <BsArrowLeft size={25} onClick={()=>navigate(-1)} />
                </div>

                <div className="introduction-container">
                    <div className="headliner-container">
                        <h1 className="headerliner-name"> EXPLORING THE TOOL </h1>
                    </div>
                    <div className="body-container">
                        <Card>
                            <h1>Breathe Life into the Digital Realm </h1>
                            <p>
                                GaussiScape stands at the cutting edge of metaverse technology, taking the virtual experiences we know today and catapulting them into hyper-realistic, tangible realms of tomorrow. As we declare, "GaussiScape is reanimating the metaverse." But what does that truly mean for developers, creators, and users alike?
                            </p>
                        </Card>
                        <Card>
                            <h1>The Power of Reanimation </h1>
                            <p>
                                When we say "reanimating," we're not merely talking about breathing life into static digital worlds. We're talking about creating vibrant, dynamic, and immersive environments that pulse with the very essence of reality.
                                <ul>
                                    <li>
                                        <span className="list-main">Authentic Interactions</span>: Gone are the days of clunky avatars and blocky landscapes. With GaussiScape, users can engage in an environment that mirrors the rich textures and detailed nuances of the real world, offering authentic interactions that were once the stuff of sci-fi dreams.
                                    </li>
                                    <li>
                                        <span className="list-main">Endless Horizons</span>: Our 3D Gaussian Splatting technology does not just replicate the real world but offers developers the tools to morph, meld, and mold reality, crafting unique universes bound only by imagination.
                                    </li>
                                    <li>
                                        <span className="list-main">Adaptive Experiences</span>: GaussiScape's environments aren't just static scenes. They're living, breathing ecosystems that respond and adapt to user interactions, ensuring each visit to the metaverse is as fresh and exciting as the first.
                                    </li>
                                </ul>
                            </p>
                        </Card>
                        <Card>
                            <h1>The New Dawn of the Metaverse </h1>
                            <p>
                                As technology and creativity converge, we find ourselves at a unique crossroads. The digital spaces we inhabit, the stories we tell, and the connections we forge are undergoing a profound transformation.
                            </p>
                        </Card>
                    </div>
                    <div className="body-bottom">
                        <h3 className="card-heading"> Join us in redefining reality </h3>
                        <p className="body-bottom-content">
                            Experience the magic, wonder, and infinite possibilities as GaussiScape reanimates the metaverse. 
                            <br />
                            Welcome to the future of digital immersion
                        </p>
                        <div className="body-bottom-button">
                            <Button to="/mainpage"> GET STARTED </Button>
                        </div>
                    </div>
                </div>
            </div>

    )

}

export default Introduction;

{/* <div className="headliner"> 
    <h5 className="subheadliner"> TUTORIALS & INSTRUCTIONS </h5>
    <h1 className="headerliner-name"> EXPLORING DEV TOOL </h1>
    <h3> Bringing your favorite scene into 3D game with our innovative tools </h3>
</div> */}