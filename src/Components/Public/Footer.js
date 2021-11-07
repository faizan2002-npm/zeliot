import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

export const Footer = () => {
    return (
        <>
            <footer id="footer">
                <Container>
                    <Row>
                        <Col lg={6} md={6} xs={12}>
                            <h2>
                                Subscribe to our Newsletter
                            </h2>
                            <p>
                                Get weekly content highlights including videos, articles, blogs, and more delivered directly to
                                your inbox
                            </p>
                        </Col>
                        <Col lg={{ span: 4, offset: 2 }} md={{ span: 4, offset: 2 }} xs={12}>
                            <div className="d-flex justify-content-end">
                                    <input type="text" placeholder="ENTER YOUR EMAIL" />
                            </div>
                            <div className="d-flex justify-content-end pad">
                                <button className="btn btn-default">
                                    SUBMIT
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}
