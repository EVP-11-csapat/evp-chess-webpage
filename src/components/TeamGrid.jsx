import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const TeamGrid = () => {
    const team = {
        "members": [
            {
                "id": "1",
                "name": "Németh Tamás",
                "email": "swtjxf@inf.elte.hu",
                "links": [
                    {
                        "name": "GitHub",
                        "url": "https://github.com/Nemeth-Tamas"
                    }
                ]
            },
            {
                "id": "2",
                "name": "Riszterer István",
                "email": "gwlxts@inf.elte.hu",
                "links": [
                    {
                        "name": "GitHub",
                        "url": "https://github.com/isti98"
                    }
                ]
            },
            {   
                "id": "3",
                "name": "Maár Dávid",
                "email": "ssqod1@inf.elte.hu",
                "links": [
                    {
                        "name": "GitHub",
                        "url": "https://github.com/Exclusivefrog28"
                    }
                ]
            },
            {   
                "id": "4",
                "name": "11. Csapat",
                "links": [
                    {
                        "name": "GitHub Organization",
                        "url": "https://github.com/EVP-11-csapat"
                    }
                ]
            },
        ]
    }

    return (
        <div>
            <Container>
                <Row className="justify-content-lg-center">
                    {team.members.map((member) =>
                        {if (member.id <= 3) return (
                        <Col lg={4} md={12} style={{marginBottom: '0.5rem'}}>
                            <Card className="bg-dark text-danger border-primary">
                                <Card.Body>
                                    <Card.Title style={{fontSize: '2rem'}}>{member.name}</Card.Title>
                                    <Card.Subtitle style={{marginBottom: '0.3rem', fontSize: '1.1rem'}}>
                                        <Card.Link 
                                            className="mb-2 text-muted" 
                                            style={{textDecoration: 'none'}}
                                            href={"mailto:" + member.email}>
                                            <FontAwesomeIcon icon={faEnvelope} style={{marginRight: "0.2rem"}} />: {member.email}
                                        </Card.Link>
                                    </Card.Subtitle>
                                    {member.links.map((link) => (
                                        <Card.Link href={link.url} target="_blank" style={{textDecoration: 'none', fontSize: '1.1rem'}}>{link.name.includes("GitHub") ? (<FontAwesomeIcon icon={faGithub} style={{marginRight: "0.3rem"}} />) : ""}{link.name}</Card.Link>
                                    ))}
                                </Card.Body>
                            </Card>
                        </Col>
                    )})}
                </Row>
                <Row className="justify-content-lg-center">
                    {team.members.map((member) =>
                        {if (member.id > 3 && member.id <=6) return (
                        <Col lg={4} md={12} style={{marginBottom: '0.5rem'}}>
                            <Card className="bg-dark text-danger border-primary">
                                <Card.Body>
                                    <Card.Title style={{fontSize: '2rem'}}>{member.name}</Card.Title>
                                    <Card.Subtitle style={{marginBottom: '0.3rem', fontSize: '1.1rem'}}>
                                        {/* <Card.Link 
                                            className="mb-2 text-muted" 
                                            style={{textDecoration: 'none'}}
                                            href={"mailto:" + member.email}>
                                            <FontAwesomeIcon icon={faEnvelope} style={{marginRight: "0.2rem"}} />: {member.email}
                                        </Card.Link> */}
                                    </Card.Subtitle>
                                    {member.links.map((link) => (
                                        <Card.Link href={link.url} target="_blank" style={{textDecoration: 'none', fontSize: '1.1rem'}}>{link.name.includes("GitHub") ? (<FontAwesomeIcon icon={faGithub} style={{marginRight: "0.3rem"}} />) : ""}{link.name}</Card.Link>
                                    ))}
                                </Card.Body>
                            </Card>
                        </Col>
                    )})}
                </Row>
            </Container>
        </div>
    );
};

export default TeamGrid;