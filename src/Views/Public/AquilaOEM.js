import React, { useState } from 'react'
import PublicLayout from './../../Layouts/Public/PublicLayout';
import Images from "./../../Constants/Images";
import MilestoneBox from './../../Components/Public/MilestoneBox';
import LeftRightSection from './../../Components/Public/LeftRightSection';
import { Container, Image, Row, Col } from 'react-bootstrap';
import FeaturedCard from './../../Components/Public/FeaturedCard';
import SolutionMenuCard from './../../Components/Public/SolutionMenuCard';
import ReactPlayer from 'react-player';
export const AquilaOEM = () => {
    const [FirstSection, setFirstSection] = useState([{
        _id: 1,
        image: Images.Solution1,
        title: 'Automotive OEM & Enterprise solutions',
        paragraph: 'Zeliot Platform & solutions are built keeping in mind automotive telematics use cases, So its highly optimized solution for automotive use cases. Large IT & consulting enterprises with a focus on the automotive vertical can partner with Zeliot to offer industry-best solutions in the automotive industry.',
    }]);
    const [Features, setFeatures] = useState([
        {
            _id: 1,
            image: Images.AquilaOEM1,
            title: 'ETA Alerts & Notifications'
        },
        {
            _id: 2,
            image: Images.AquilaOEM2,
            title: 'Live Video Feed & Data Retention'
        },
        {
            _id: 3,
            image: Images.AquilaOEM3,
            title: 'Live Track and Trace'
        },
        {
            _id: 4,
            image: Images.AquilaOEM4,
            title: 'Bulk Student Creation'
        },
        {
            _id: 5,
            image: Images.AquilaOEM5,
            title: 'OTP Based Login (Mobile App)'
        },
        {
            _id: 6,
            image: Images.AquilaOEM6,
            title: 'Parent Application'
        },
        {
            _id: 7,
            image: Images.AquilaOEM7,
            title: 'Administration Application'
        },
        {
            _id: 8,
            image: Images.AquilaOEM8,
            title: 'Advanced Reports'
        },
        {
            _id: 9,
            image: Images.AquilaOEM9,
            title: 'Facial Recognition'
        },
        {
            _id: 10,
            image: Images.AquilaOEM10,
            title: 'Easy Integration with ERPs'
        },
        {
            _id: 11,
            image: Images.AquilaOEM11,
            title: 'Automatic Routing'
        },
        {
            _id: 12,
            image: Images.AquilaOEM12,
            title: 'SOS Alerts'
        },
    ])
    const [SixthSection, setSixthSection] = useState([{
        _id: 1,
        image1: Images.AquilaOEM17,
        image2: Images.AquilaOEM18,
        image3: Images.AquilaOEM19,
        image4: Images.AquilaOEM20,
        title: 'Glimpses of the end user mobile application based on the client requirement.'
    }]);
    return (
        <PublicLayout>
            {
                FirstSection.map((e, index) => (<LeftRightSection key={`key-${index}-${e._id}`} theme='dark' key={`key-${index}-${e._id}`} title={e.title} paragraph={e.paragraph} image={e.image} inverse={true} exploreLink={e.firstLink} pricingLink={e.secondLink} />))
            }
            <section className="features">
                <Container>
                    <h1>
                        Solution Package
                    </h1>
                    <Row>
                        {
                            Features.map((e, index) => (<FeaturedCard key={`key-${index}-${e._id}`} title={e.title} image={e.image} />))
                        }
                    </Row>
                </Container>
            </section>
            <div class="container mt-sm-4 mt-md-5">
                <div class="row ">
                    <div class="col-sm-12 col-lg-4 col-md-4 oemSolution">
                        <div class="d-flex align-items-center">
                            <h4 class="heading1">We offer comprehensive End-to-End solutions to</h4>
                            <i class="fas fa-long-arrow-alt-right fa-2x solutionArrow"></i>
                        </div>
                        <a href="#" class="btn btn-default w-90 mt-4">
                            <h5>Learn More</h5>
                        </a>
                    </div>
                    <div class="col-lg-8 col-md-8 col-sm-12">
                        <div class="row">
                            <div class="col-sm-6 col-md-6 col-lg-6">
                                <div class="containerCst">
                                    <img src={Images.AquilaOEM13} alt="Snow" style={{
                                        opacity: '0.6',
                                        width: '100%'
                                    }} />
                                    <div class="centered">
                                        <h4 class="heading1" style={{
                                            fontSize: '1.35rem'
                                        }}>2-Wheelers (IC)</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-6">
                                <div class="containerCst">
                                    <img src={Images.AquilaOEM14} alt="Snow" style={{
                                        opacity: '0.6',
                                        width: '100%'
                                    }} />
                                    <div class="centered">
                                        <h4 class="heading1" style={{
                                            fontSize: '1.32rem'
                                        }}>4-Wheelers (IC)</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6 col-md-6 col-lg-6">
                                <div class="containerCst">
                                    <img src={Images.AquilaOEM15} alt="Snow" style={{
                                        opacity: '0.6',
                                        width: '100%'
                                    }} />
                                    <div class="centered">
                                        <h4 class="heading1" style={{
                                            fontSize: '1.3rem'
                                        }}>2-Wheelers (EV)</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-6">
                                <div class="containerCst">
                                    <img src={Images.AquilaOEM16} alt="Snow" style={{
                                        opacity: '0.6',
                                        width: '100%'
                                    }} />
                                    <div class="centered">
                                        <h4 class="heading1" style={{
                                            fontSize: '1.2rem'
                                        }}>4-Wheelers (EV)</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            {
                SixthSection.map((e, index) => (<><div key={index} class="container mt-5 schoolCustomeMobileCenter">
                    <div class="row align-items-center">
                        <div class="col">
                            <img src={e.image1} class="img-fluid" alt="" />
                        </div>
                        <div class="col">
                            <img src={e.image2} class="img-fluid" alt="" />
                        </div>
                        <div class="col">
                            <img src={e.image3} class="img-fluid" alt="" />
                        </div>
                        <div class="col">
                            <img src={e.image4} class="img-fluid" alt="" />
                        </div>

                        <div class="col-lg-4 col-md-4  col-12 text-end">
                            <h4 class="mt-4 CustomeLineHeight heading1">
                                {e.title}
                            </h4>
                        </div>
                    </div>
                </div></>))
            }
            <div class="container mt-5">
                <div class="row">
                    <div class="col-lg-5 col-md-6 col-12 offset-lg-5 offset-md-4 ">
                        <h6 class="subHeading">Aquila OEM APIs</h6>
                        <h4 class="mt-4 heading1">Choose from a wide range of over<br /> 300 APIs. Leave the heavy
                            lifting<br /> work
                            of data hitting the servers up<br />to us!</h4>
                    </div>
                </div>
            </div>
            <div class="container mt-5 CustomeMobileCenter">
                <div class="row apiContainer">
                    <div class="col-lg-3 col-md-3 col-12 offset-lg-1 align-self-end mobile-space ">
                        <h4 class="heading1">Integrate our APIs to your tracking platform</h4>
                        <a href="#" class="btn btn-default mt-5 d-block w-100" >
                            <h5 className="m-0">Learn More</h5>
                        </a>
                    </div>
                    <div class="col-lg-2 col-md-3 col-12 offset-lg-1 pr-lg-0 mobile-space apiIcons">
                        <div class="card h-100">
                            <div class="card-body customPaddingCard-2 text-center">
                                <div>
                                    <img src={Images.AquilaTrack6} alt="..." />
                                </div>
                                <div class="card-text mt-4">
                                    <h6 class="subHeading">Signup</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-3 col-12 pr-lg-0 mobile-space apiIcons">
                        <div class="card h-100">
                            <div class="card-body customPaddingCard-2 text-center">
                                <div>
                                    <img src={Images.AquilaTrack7} alt="..." />
                                </div>
                                <div class="card-text mt-4">
                                    <h6 class="subHeading">Onboard</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-3 col-12 pr-lg-0 mobile-space apiIcons">
                        <div class="card h-100">
                            <div class="card-body customPaddingCard-2 text-center">
                                <div>
                                    <img src={Images.AquilaTrack8} alt="..." />
                                </div>
                                <div class="card-text mt-5">
                                    <h6 class="subHeading">Start Tracking</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid mt-5" style={{
                backgroundColor: '#202020'
            }}>
                <div class="row justify-content-md-center mb-5">
                    <div class="text-center">
                        <h4 class="mx-5 mt-5 heading1 text-center">Ready for an upgrade?</h4>
                        <h6 class="mx-5 mt-4 subHeading text-center">A seamless, scalable, easy to use, modern portal is waiting. <br />
                            Contact
                            sales now!</h6>
                        <a href="#" class="px-5 btn  btn-default mt-4" onclick="">
                            <h5 className="m-0">Get Started For Free</h5>
                        </a>
                    </div>
                </div>
                <hr style={{
                    border: '1px solid black',
                    width: ' 70%',
                    margin: '0 auto'
                }} />
            </div>
        </PublicLayout>
    )
}
