import React from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SolutionMenuCard = ({ image, title,link }) => {
    return (
        <>
            <Link to={link}>
                <div className="navi-link-inner">
                    <div>
                        <Image fluid src={image} />
                    </div>
                    <div className="navi-text">
                        {
                            title
                        }
                    </div>
                </div>
            </Link>
        </>
    )
}

export default SolutionMenuCard
