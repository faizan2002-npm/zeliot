import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PostCard = ({ image, title, paragraph, link }) => {
    return (
        <>
            <Col lg={6} md={6} xs={12}>
                <Card>
                    <Image fluid src={image} alt="" />
                    <Card.Body>
                        <h5 className="card-title">
                            {title}
                        </h5>
                        <p className="card-text">
                            {paragraph}
                        </p>
                        <Link to={link} className="btn btn-default">
                            EXPLORE CMP
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default PostCard
