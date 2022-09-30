import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
        <Container>
            <Row className="justify-content-lg-center">
                {links.links.map((link) => (
                    <Col lg={4} md={12} style={{marginBottom: '0.5rem'}}>
                        <Card>
                        <Card.Body>
                            <Card.Title style={{fontSize: '2rem'}}>{link.name}</Card.Title>
                            <Card.Link href={link.url} style={{textDecoration: 'none'}}>
                            {link.name.includes("GitHub") ? (<FontAwesomeIcon icon={faGithub} style={{marginRight: "0.3rem"}} />) : ""}{link.url}</Card.Link>
                        </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Links;