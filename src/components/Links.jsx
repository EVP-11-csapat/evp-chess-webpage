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
            {
                "name": "Specification",
                "url": "https://docs.google.com/document/d/1hhPtlxlWX3BH0UcJKkP7mdBpkwVSKundNC_xitEhstQ/edit?usp=sharing"
            },
            {
                "name": "Order transcript",
                "url": "wip"
            }
        ]
    }

    return (
        <Container>
            <Row className="justify-content-lg-center">
                {links.links.map((link) => (
                    <Col lg={4} md={12} style={{marginBottom: '0.5rem'}}>
                        <Card className="bg-dark text-danger border-success">
                        <Card.Body>
                            <Card.Title style={{fontSize: '2rem'}}>{link.name}</Card.Title>
                            <Card.Link href={link.url} target="_blank" className="text-primary" style={{textDecoration: 'none'}}>
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
