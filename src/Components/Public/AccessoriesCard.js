import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'

const AccessoriesCard = ({image,title}) => {
    return (
        <>
            <Col lg={6} md={6} xs={12}>
                <Card>
                    <Image fluid src={image} alt="" />
                </Card>
                    <Card.Body>
                        <h5 className="card-title">
                            {title}
                        </h5>
                    </Card.Body>
            </Col>
        </>
    )
}

export default AccessoriesCard
