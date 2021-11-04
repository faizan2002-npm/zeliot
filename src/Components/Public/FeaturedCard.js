import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'

const FeaturedCard = ({image,title}) => {
    return (
        <>
            <Col lg={2} md={4} sm={4} xs={6}>
                <Card>
                    <Card.Body>
                        <Image fluid src={image} />
                        <p>
                            {
                                title
                            }
                        </p>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default FeaturedCard
