import React from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Images from '../../Constants/Images'
import PublicLayout from '../../Layouts/Public/PublicLayout'

export const NotFound = () => {
    return (
        <PublicLayout>
            <section className="Sorry">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6 col-12">
                            <h2>
                                Sorry, the page you are looking for is not available at this moment.
                            </h2>
                            <p>
                                The page you are looking for cannot be found. But don’t let that stop you. We’ve got more
                                awesome stuff to check out.
                            </p>
                            <Link to="/">
                                SUBMIT
                            </Link>
                        </div>
                        <div className="col-lg-7 col-md-6 col-12">
                            <Image src={Images.ComponentNotFound} fluid alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    )
}
