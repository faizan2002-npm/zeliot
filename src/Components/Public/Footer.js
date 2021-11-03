import React from 'react'

export const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                            <h2>
                                Subscribe to our Newsletter
                            </h2>
                            <p>
                                Get weekly content highlights including videos, articles, blogs, and more delivered directly to
                                your inbox
                            </p>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="d-flex justify-content-end">
                                <form>
                                    <input type="text" placeholder="ENTER YOUR EMAIL" />
                                </form>
                            </div>
                            <div class="d-flex justify-content-end pad">
                                <a href="#">
                                    SUBMIT
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
