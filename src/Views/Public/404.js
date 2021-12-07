import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Images from '../../Constants/Images'
import PublicLayout from '../../Layouts/Public/PublicLayout'

export const NotFound = () => {
    return (
        <PublicLayout>
            <section className="Sorry">
                <Container>
                <Row className="flex-column-reverse flex-md-row flex-lg-row row">
                        <Col lg={5} md={5} xs={12} className="align-self-center">
                            <h2>
                                Sorry, the page you are looking for is not available at this moment.
                            </h2>
                            <p>
                                The page you are looking for cannot be found. But don’t let that stop you. We’ve got more
                                awesome stuff to check out.
                            </p>
                            <Row>
                                <Col lg={6} md={7} xs={12}>
                                    <Link to="/" className="btn btn-default w-100">
                                        Go to home page
                                    </Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={6} xs={12} className="offset-lg-1 offset-md-1">
                            <Image src={Images.ComponentNotFound} fluid alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </PublicLayout>
    )
}
