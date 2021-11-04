import React from 'react'
import { Col } from 'react-bootstrap'

const MilestoneBox = ({title,paragraph}) => {
    return (
        <>
            <Col lg md={4} sm={6} xs={6}>
                <h3>
                    {
                        title
                    }
                </h3>
                <p>
                    {
                        paragraph
                    }
                </p>
            </Col>
        </>
    )
}

export default MilestoneBox
