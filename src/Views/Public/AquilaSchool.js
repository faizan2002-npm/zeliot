import React, { useState } from 'react'
import PublicLayout from './../../Layouts/Public/PublicLayout';
import Images from "./../../Constants/Images";
import MilestoneBox from './../../Components/Public/MilestoneBox';
import LeftRightSection from './../../Components/Public/LeftRightSection';
import { Container, Image, Row, Col } from 'react-bootstrap';
import FeaturedCard from './../../Components/Public/FeaturedCard';
import SolutionMenuCard from './../../Components/Public/SolutionMenuCard';
import ReactPlayer from 'react-player';
export const AquilaSchool = () => {
    const [FirstSection, setFirstSection] = useState([{
        _id: 1,
        image: Images.AquilaSchool1,
        title1: 'Meet a <span class="half-highlight"> better, faster, and more <br>secure school transport management</span> portal.',
        subheading1: 'Aquila School',
        title2: 'Our school solution brings peace of mind with safety of your students <br> and ease of operation',
        subheading2: 'AquilaTrack Web App'
    }]);
    const [Features, setFeatures] = useState([
        {
            _id: 1,
            image: Images.SolutionEVSFeatureSecondImage,
            title: 'ETA Alerts & Notifications'
        },
        {
            _id: 2,
            image: Images.SolutionEVSFeatureFourthImage,
            title: 'Live Video Feed & Data Retention'
        },
        {
            _id: 3,
            image: Images.SolutionEVSFeatureSeventhImage,
            title: 'Live Track and Trace'
        },
        {
            _id: 4,
            image: Images.SolutionEVSFeatureTenthImage,
            title: 'Bulk Student Creation'
        },
        {
            _id: 5,
            image: Images.AquilaSchool5,
            title: 'OTP Based Login (Mobile App)'
        },
        {
            _id: 6,
            image: Images.AquilaSchool6,
            title: 'Parent Application'
        },
        {
            _id: 7,
            image: Images.AquilaSchool7,
            title: 'Administration Application'
        },
        {
            _id: 8,
            image: Images.SolutionEVSFeatureSixthImage,
            title: 'Advanced Reports'
        },
        {
            _id: 9,
            image: Images.AquilaSchool8,
            title: 'Facial Recognition'
        },
        {
            _id: 10,
            image: Images.AquilaSchool9,
            title: 'Easy Integration with ERPs'
        },
        {
            _id: 11,
            image: Images.SolutionEVSFeatureNinthImage,
            title: 'Automatic Routing'
        },
        {
            _id: 12,
            image: Images.AquilaSchool10,
            title: 'SOS Alerts'
        },
    ])
    const [SixthSection, setSixthSection] = useState([{
        _id: 1,
        image1: Images.AquilaSchool2,
        image2: Images.AquilaSchool3,
        image3: Images.AquilaSchool4,
        title: 'Ensure safety of your student with detailed dashboard, and tracking information at each step.',
        paragraph: 'Aquila School Mobile App',
        appleLink: 'https://apps.apple.com/us/app/aquilaparent/id1495140968',
        androidLink: 'https://play.google.com/store/apps/details?id=com.aquilaparent&amp;hl=en_IN',
    }]);
    return (
        <PublicLayout>
            {
                FirstSection.map((e, index) => (<><div class="container">
                    <div class="row d-flex align-items-center">
                        <div class="col-md-6 col-sm-12 col-lg-5 CustomeWidth">
                            <h6 class="mt-4 subHeading">{e.subheading1}</h6>
                            <h4 class="mt-4 CustomeLineHeight heading1" dangerouslySetInnerHTML={{ __html: e.title1 }}></h4>
                            <h6 class="mt-4 subHeading">{e.subheading2}</h6>
                            <h4 class="mt-4 CustomeLineHeight heading1" dangerouslySetInnerHTML={{ __html: e.title2 }}></h4>
                        </div>
                        <div class="col-md-6 col-sm-12 col-lg-6 ">
                            <img src={e.image} class="img-fluid" alt="" />
                        </div>
                    </div>
                </div></>))
            }
            <section className="features">
                <Container>
                    <h1>
                        Key Features
                    </h1>
                    <Row>
                        {
                            Features.map((e, index) => (<FeaturedCard key={`key-${index}-${e._id}`} title={e.title} image={e.image} />))
                        }
                    </Row>
                </Container>
            </section>
            {
                SixthSection.map((e, index) => (<><div key={index} class="container mt-5 schoolCustomeMobileCenter">
                    <div class="row align-items-center">
                        <div class="col-lg-2 col-md-2 col-12">
                            <img src={e.image1} class="img-fluid" alt="" />
                        </div>
                        <div class="col-lg-2 col-md-2 col-12">
                            <img src={e.image2} class="img-fluid" alt="" />
                        </div>
                        <div class="col-lg-2 col-md-2 col-12">
                            <img src={e.image3} class="img-fluid" alt="" />
                        </div>

                        <div class="col-lg-6 col-md-6 col-sm-12 text-end ">
                            <h6 class="subHeading">{e.paragraph}</h6>
                            <h4 class="mt-4 CustomeLineHeight heading1">
                                {e.title}
                            </h4>
                            <Row className="justify-content-end w-100">
                                <Col lg={6} md={6} xs={12} className="align-self-center d-flex   justify-content-end text-end">
                                    {
                                        (e.appleLink) ? <a href={e.appleLink} className=" text-light fa-2x btn d-inline w-auto">
                                            <i class="fab fa-apple fa-2x"></i>
                                        </a> : ""
                                    }

                                    {
                                        (e.androidLink) ? <a href={e.androidLink} className=" text-light fa-2x btn d-inline w-auto">
                                            <i class="fab fa-android fa-2x"></i>
                                        </a> : ""
                                    }
                                </Col>
                            </Row>
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
