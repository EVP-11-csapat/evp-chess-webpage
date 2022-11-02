import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Links = () => {
    const links = {
        "links": [
            {
                "id": "1",
                "name": "GitHub Website Project",
                "text": "Click To Open The GitHub Website Project",
                "url": "https://github.com/EVP-11-csapat/evp-chess-webpage"
            },
            {
                "id": "2",
                "name": "Specification",
                "text": "Click To Open The Specification Document",
                "url": "https://docs.google.com/document/d/1hhPtlxlWX3BH0UcJKkP7mdBpkwVSKundNC_xitEhstQ/edit?usp=sharing"
            },
            {
                "id": "3",
                "name": "Order protocol",
                "text": "Click To Open The Order Protocol",
                "url": "https://docs.google.com/document/d/1A0IQruTmMvtqq3XX_-hnD3soiD1MWmDaFwZddjBgKvY/edit?usp=sharing"
            },
            {
                "id": "4",
                "name": "GitHub Chess 1.5 Project",
                "text": "Click To Open The GitHub Chess 1.5 Project",
                "url": "https://github.com/EVP-11-csapat/evp-chess-1-5"
            },
            {
                "id": "5",
                "name": "Gantt Diagram Tools",
                "text": "Click To Open The Gantt Diagram Tools Slide",
                "url": "https://docs.google.com/presentation/d/1ZiOPaXLIyatmTfw7uy650TiD6i4KOPZc4kY1OxJTI5A/edit?usp=sharing"
            },
            {
                "id": "6",
                "name": "UML Diagrams",
                "text": "Click To Open The UML Diagrams Document",
                "url": "https://docs.google.com/document/d/1ZSLT1FOQTE8Q6UPe2pt-2CTCbAsM6RYlcqUP-r-_84Y/edit?usp=sharing"
            }
        ]
    }

    return (
        <Container>
            <Row className="justify-content-lg-center">
                {links.links.map((link) => 
                    {if (link.id <= 3) return (
                    <Col lg={4} md={12} style={{marginBottom: '0.5rem'}}>
                        <Card className="bg-dark text-danger border-success">
                        <Card.Body>
                            <Card.Title style={{fontSize: '2rem'}}>{link.name}</Card.Title>
                            <Card.Link href={link.url} target="_blank" className="text-primary" style={{textDecoration: 'none'}}>
                            {link.name.includes("GitHub") ? (<FontAwesomeIcon icon={faGithub} style={{marginRight: "0.3rem"}} />) : ""}{link.text}</Card.Link>
                        </Card.Body>
                        </Card>
                    </Col>
                )})}
            </Row>
            <Row className="justify-content-lg-center">
                {links.links.map((link) => 
                    {if (link.id > 3 && link.id <= 6) return (
                    <Col lg={4} md={12} style={{marginBottom: '0.5rem'}}>
                        <Card className="bg-dark text-danger border-success">
                        <Card.Body>
                            <Card.Title style={{fontSize: '2rem'}}>{link.name}</Card.Title>
                            <Card.Link href={link.url} target="_blank" className="text-primary" style={{textDecoration: 'none'}}>
                            {link.name.includes("GitHub") ? (<FontAwesomeIcon icon={faGithub} style={{marginRight: "0.3rem"}} />) : ""}{link.text}</Card.Link>
                        </Card.Body>
                        </Card>
                    </Col>
                )})}
            </Row>
        </Container>
    );
};

export default Links;
