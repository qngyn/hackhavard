import Button from "../components/Button";
const Home = () => {
    return (
        <div className="homepage"> 
            <div className="homepage-headliner"> 
                <h1 className="headliner-content"> GAUSSISCAPE </h1>
            </div>
            <div className="home-buttons">
                <Button to = "/mainpage"> START </Button>
                <Button to="/instruction"> INSTRUCTION </Button>
            </div>
        </div>
    )
}

export default Home;