import React from 'react'
import PublicLayout from './../../Layouts/Public/PublicLayout';
import Images from "./../../Constants/Images";

export const Solutions = () => {
    const [SolutionMenu, setSolutionMenu] = useState([
        {
            _id: 1,
            image: Images.SolutionEVSFirstMenuImage,
            title: 'Fleet Management Solution',
            link: '/SolutionFMS'
        },
        {
            _id: 2,
            image: Images.SolutionEVSFirstMenuImage,
            title: 'OEM & Enterprise Solution',
            link: '/SolutionEVS'
        },
        {
            _id: 3,
            image: Images.SolutionEVSFirstMenuImage,
            title: 'Electric Vehicle Solution',
            link: '/'
        },
        {
            _id: 4,
            image: Images.SolutionEVSFirstMenuImage,
            title: 'Urban Public Transport Solution',
            link: '/'
        },
        {
            _id: 5,
            image: Images.SolutionEVSFirstMenuImage,
            title: 'Logistics Solution',
            link: '/'
        },
        {
            _id: 6,
            image: Images.SolutionEVSFirstMenuImage,
            title: 'Employee Transport Management Solution',
            link: '/'
        },
        {
            _id: 7,
            image: Images.SolutionEVSFirstMenuImage,
            title: 'School Solution',
            link: '/'
        },
        {
            _id: 8,
            image: Images.SolutionEVSFirstMenuImage,
            title: 'Business Admin Solution',
            link: '/'
        },
    ])
    const [Milestone, setMilestone] = useState([
        {
            _id: 1,
            title: '800 Million',
            paragraph: 'Messages per month',
        },
        {
            _id: 2,
            title: '0.1 Billion',
            paragraph: 'Kilometers driven per month',
        },
        {
            _id: 3,
            title: '0.1 Billion',
            paragraph: 'Alerts generated per month',
        },
        {
            _id: 4,
            title: '100 Hours',
            paragraph: 'Of vehicle movement tracked per month',
        },
        {
            _id: 5,
            title: '0.1 Billion',
            paragraph: 'Alerts generated per month',
        },
    ])
    return (
        <PublicLayout>
            <section className="navi-menu">
                {
                    SolutionMenu.map((e, index) => (<SolutionMenuCard key={`key-${index}-${e._id}`} image={e.image} title={e.title} link={e.link} />))
                }
            </section>
            <section class="iop">
                <div class="">
                    <img src="img/zeliot10.png" class="w-100 img-fluid" alt="" />
                </div>
            </section>
            <section className="messages">
                <Container fluid>
                    <Row>
                        {
                            Milestone.map((e, index) => (<MilestoneBox key={`key-${index}-${e._id}`} title={e.title} paragraph={e.paragraph} />))
                        }
                    </Row>
                </Container>
            </section>
            <section class="bann">
                <div class="container">
                    <div class="text-center">
                        <h1>
                            Custom Built Solutions based on Customer Needs
                        </h1>
                        <img src="img/zeliot11.png" class="img-fluid w-100" alt="" />
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-12 self">
                            <h2>
                                Lorem Ipsum dior Lorem Ipsum dior Lorem Ipsum dior Lorem Ipsum dior.
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                                et justo duo dolores et ea rebum. Stet clita kasd.
                            </p>
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-12 displaay">
                                    <a href="#" class="btn btn-default ">
                                        EXPLORE CMP
                                    </a>
                                </div>
                                <div class="col-lg-6 col-md-6 col-12 displaay">
                                    <a href="#" class="btn btn-default-2 ">
                                        CHECK PRICING
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="time">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-6 col-md-6 col-12 align-self-center">
                            <h1>
                                99.99% guaranteed Up-Time
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                                et justo duo dolores et ea rebum. Stet clita kasd.
                            </p>
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-12">
                                    <a href="#" class="btn btn-default">
                                        EXPLORE CMP
                                    </a>
                                </div>
                                <div class="col-lg-6 col-md-6 col-12">
                                    <a href="#" class="btn btn-default-2">
                                        CHECK PRICING
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-12">
                            <img src="img/zeliot7-(2).png" class="w-100" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section class="never">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="card">
                                <img class="img-fluid" src="img/zeliot13.png" alt="" />
                                <div class="card-body">
                                    <h5 class="card-title">
                                        Managing inventory has never been easier, be it Telematics devices or SIM cards.We
                                        got you covered.
                                    </h5>
                                    <p class="card-text">
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.At vero
                                        eos et accusam et justo duo dolores et ea rebum.Stet clita kasd.
                                    </p>
                                    <a href="#" class="btn btn-default">
                                        EXPLORE CMP
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="card">
                                <img class="img-fluid" src="img/zeliot13.png" alt="" />
                                <div class="card-body">
                                    <h5 class="card-title">
                                        Looking for an easier way to plan everyday trips for your employees?You’ll love Automatic Routing!
                                    </h5>
                                    <p class="card-text">
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.At vero
                                        eos et accusam et justo duo dolores et ea rebum.Stet clita kasd.
                                    </p>
                                    <a href="#" class="btn btn-default">
                                        EXPLORE CMP
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="tim">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-12">
                            <img src="img/zeliot7-(2).png" class="w-100" alt="" />
                        </div>
                        <div class="col-lg-6 col-md-6 col-12 align-self-center">
                            <h1>
                                99.99% guaranteed Up-Time
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                                et justo duo dolores et ea rebum. Stet clita kasd.
                            </p>
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-12">
                                    <a href="#" class="btn btn-default">
                                        EXPLORE CMP
                                    </a>
                                </div>
                                <div class="col-lg-6 col-md-6 col-12">
                                    <a href="#" class="btn btn-default-2">
                                        CHECK PRICING
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section class="action">
                <div class="container">
                    <h1>
                        See our solution live, in action
                    </h1>
                    <div>
                        <img src="img/zeliot14.png" class="img-fluid" alt="" />
                    </div>
                </div>
            </section>
        </PublicLayout>
    )
}
