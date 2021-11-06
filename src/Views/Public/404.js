import React from 'react'
import PublicLayout from '../../Layouts/Public/PublicLayout'

export const NotFound = () => {
    return (
        <PublicLayout>
            <section class="Sorry">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 col-md-6 col-12">
                            <h2>
                                Sorry, the page you are looking for is not available at this moment.
                            </h2>
                            <p>
                                The page you are looking for cannot be found. But don’t let that stop you. We’ve got more
                                awesome stuff to check out.
                            </p>
                            <a href="#">
                                SUBMIT
                            </a>
                        </div>
                        <div class="col-lg-7 col-md-6 col-12">
                            <img src="img/zeliot3.svg" class="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    )
}
