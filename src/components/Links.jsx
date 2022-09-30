import React from "react";
import { Card } from "react-bootstrap";

const Links = () => {
    const links = {
        "links": [
            {
                "name": "GitHub Website Project",
                "url": "https://github.com/Nemeth-Tamas/evp-project-webpage"
            },
        ]
    }

    return (
        <div>
            {links.links.map((link) => (
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{link.name}</Card.Title>
                    <Card.Link href={link.url}>{link.url}</Card.Link>
                </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default Links;