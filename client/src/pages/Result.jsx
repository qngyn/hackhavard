import Iframe from 'react-iframe'
const Result = () => {
    return (
        <div className="page-container">
            <Iframe 
                url="https://poly.cam/capture/8c5dfc26-2362-436c-83e1-a2691432a504" 
                width="1000px"
                height="500px"
                display="block"
                position="relative"
            />

        </div>
    )
}

export default Result;