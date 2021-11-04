import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

const LeftRightSection = ({ title, paragraph, image, inverse, exploreLink, pricingLink }) => {
    return (
        <>
            <section className="time">
                <Container>
                    {
                        inverse ? <>
                            <Row className="flex-column-reverse flex-lg-row">
                                <Col lg={6} md={6} xs={12} className="align-self-center">
                                    <h1>
                                        {title}
                                    </h1>
                                    <p>
                                        {paragraph}
                                    </p>
                                    <Row>
                                        <Col lg={6} md={6} xs={12}>
                                            <a href={exploreLink} className="btn btn-default">
                                                EXPLORE CMP
                                            </a>
                                        </Col>
                                        <Col lg={6} md={6} xs={12}>
                                            <a href={pricingLink} className="btn btn-default-2">
                                                CHECK PRICING
                                            </a>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={6} md={6} xs={12}>
                                    <Image fluid src={image} className="w-100" />
                                </Col>
                            </Row>
                        </> : <>
                            <Row>
                                <Col lg={6} md={6} xs={12}>
                                    <Image fluid src={image} className="w-100" />
                                </Col>
                                <Col lg={6} md={6} xs={12} className="align-self-center">
                                    <h1>
                                        {title}
                                    </h1>
                                    <p>
                                        {paragraph}
                                    </p>
                                    <Row>
                                        <Col lg={6} md={6} xs={12}>
                                            <a href={exploreLink} className="btn btn-default">
                                                EXPLORE CMP
                                            </a>
                                        </Col>
                                        <Col lg={6} md={6} xs={12}>
                                            <a href={pricingLink} className="btn btn-default-2">
                                                CHECK PRICING
                                            </a>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </>
                    }
                </Container>
            </section>
        </>
    )
}

export default LeftRightSection
