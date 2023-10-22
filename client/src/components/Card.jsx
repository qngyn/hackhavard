import { useState, useEffect } from "react";

const Card = ({children, ...props}) => {
    const [heading, setHeading] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        setHeading(children[0].props.children)
        setContent(children[1].props.children)

    }, [heading, content])

    return (
        <div className="card-container">
            <h3 className="card-heading">
                {heading}
            </h3>
            <p>
                {content}
            </p>
        </div>
    )
}

export default Card;