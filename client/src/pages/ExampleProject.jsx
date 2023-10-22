import Iframe from 'react-iframe'
const ExampleProject = () => {
    return (
        <div className="page-container">
            <div className="project">
                <Iframe 
                    url="https://poly.cam/capture/38271f26-1405-405d-b187-e184171de6d5" 
                    width="1000px"
                    height="500px"
                    display="block"
                    position="relative"
                />
            </div>
            <div className="project">
                <Iframe 
                    url="https://poly.cam/capture/9128f0ab-b95a-4fb5-967a-d7ea54588094" 
                    width="1000px"
                    height="500px"
                    display="block"
                    position="relative"
                />
            </div>
        </div>
    )
}

export default ExampleProject;