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
                            <h1>What is GaussiScape? </h1>
                            <p>
                                Leveraging the breakthrough with Gaussian splatting technology, GaussiSpace is a webtool that transforms simple 2D imagery into immersive 3D landscapes. With applications spanning virtual/augmented reality, education, and medical imaging we're not just creating a tool—we're pioneering a 3D digital revolution.
                            </p>
                        </Card>
                        <Card>
                            <h1>3D, so what? </h1>
                            <p>
                                Transforming 2D images to 3D affects fields that are worth hundreds of BILLIONS of dollars. 3D environments are significant due to several applications and here are some reasons why this conversion is crucial: 
                                <ul>
                                    <li>
                                        <span className="list-main">Enhanced Visualization and Immersion</span>: 
                                        <ul>
                                            <li>
                                                Depth Perception: 3D models provide a clearer understanding of depth and spatial relationships between objects, something that's not easily captured in 2D.
                                            </li>
                                            <li>
                                                Interactivity: Users can view 3D models from any angle, providing a more comprehensive perspective and interactive experience.
                                            </li>
                                        </ul>

                                    </li>
                                    <li>
                                        <span className="list-main">Medical Imaging</span>: 
                                        <ul>
                                            <li>
                                                Diagnosis: 3D reconstruction from 2D medical scans, like MRI or CT, allows doctors to view and analyze anomalies in the body more precisely.
                                            </li>
                                            <li>
                                                Surgery Planning: Surgeons can plan interventions better by visualizing the exact morphology and position of organs, tumors, or vessels in 3D.
                                            </li>
                                        </ul>

                                    </li>
                                    <li>
                                        <span className="list-main">Engineering and Manufacturing</span>: 
                                        <ul>
                                            <li>
                                                Design: CAD tools use 3D models to design everything from machinery to buildings. These models help in detecting design flaws, analyzing structures, and simulating performance.
                                            </li>
                                            <li>
                                                Prototyping: With 3D printing becoming more prevalent, converting 2D ideas to 3D models is crucial for rapid prototyping.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span className="list-main">Entertainment and Media</span>: 
                                        <ul>
                                            <li>
                                                Video Games: Modern games rely on 3D environments and characters for realistic and immersive experiences.
                                            </li>
                                            <li>
                                                Movies: 3D modeling and animation have become staples in film production, especially in CGI-intensive movies.
                                            </li>
                                        </ul>
                                        
                                    </li>
                                     <li>
                                        <span className="list-main">Education and Training</span>: 
                                        <ul>
                                            <li>
                                            Interactive Learning: From exploring human anatomy to understanding complex machinery, 3D models can provide students with hands-on, interactive learning experiences.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span className="list-main">Cultural Preservation</span>: 
                                        <ul>
                                            <li>
                                                Historical Artifacts and Sites: 3D models can digitally preserve and document historical sites or artifacts, especially those at risk of deterioration or destruction.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span className="list-main">Real-world Integration</span>:  
                                        <ul>
                                            <li>
                                                For AR applications, 3D models derived from 2D images of the real world can be integrated into virtual environments.
                                            </li>
                                            <li>
                                                VR Worlds: Entire environments can be built using 3D modeling, enabling users to immerse themselves in virtually any setting.
                                            </li>
                                        </ul>

                                    </li>
                                </ul>
                            </p>
                        </Card>
                         <Card>
            <h1>Converting to 3D is Hard </h1>
            <p>
              <span className="list-main">Learning Curve:</span> The skills required for 3D design and modeling are significantly different from those for 2D. Artists or designers might need to undergo extensive training to master 3D tools and techniques. 3D modeling involves not just the external shape but also textures, shaders, lighting, and sometimes even internal structures. This demands meticulous attention to detail.
              <br />
              <span className="list-main">High Costs:</span> Professional 3D software can be expensive. Licenses for tools like Autodesk Maya, 3DS Max, or specialized software for industries like CAD or VFX can cost significant amounts.
              <br />
              <span className="list-main">Hardware Requirements:</span>
              <ul>
                <li>Powerful Systems: 3D modeling and rendering demand high computational power. Investing in powerful workstations with dedicated graphics units is often necessary.</li>
                <li>Plugins and Assets: Beyond the primary software, many professional 3D artists rely on plugins or purchase additional assets, which can add to costs.</li>
              </ul>
            </p>
          </Card>
                    </div>
                    <div className="body-bottom">
                        <h3 className="card-heading"> But We’ve Made it Easy </h3>
                        <p className="body-bottom-content">
                            No extreme learning curve. No insane costs involved. No ridiculous software required.
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
