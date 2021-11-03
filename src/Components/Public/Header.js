import React from 'react'

export const Header = () => {
    return (
        <>

            <header id="header">
                <nav class="navbar navbar-expand-lg navbar-dark ">
                    <div class="container">
                        <a class="navbar-brand" href="index.html">
                            <img src="img/zeliot-logo.png" class="w50" alt="" />
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="solutions.html">solutions</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="solutions-evs.html">solutions2</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">AquilaSchool</a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">
                                        AquilaOEM
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="accessories.html">
                                        Accessories
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
