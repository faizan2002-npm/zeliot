import React, { useState } from 'react'
import PublicLayout from './../../Layouts/Public/PublicLayout';
import Images from "./../../Constants/Images";
import MilestoneBox from './../../Components/Public/MilestoneBox';
import LeftRightSection from './../../Components/Public/LeftRightSection';
import { Container, Image, Row } from 'react-bootstrap';
import FeaturedCard from './../../Components/Public/FeaturedCard';
import SolutionMenuCard from './../../Components/Public/SolutionMenuCard';
import ReactPlayer from 'react-player';
export const AquilaTrack = () => {
    const [FirstSection, setFirstSection] = useState([{
        _id: 1,
        image: Images.AquilaTrack1,
        title1: 'Meet a <span class="half-highlight"> better, faster, and more <br>secure fleet management</span> portal.',
        subheading1: 'Advanced Fleet Management Portal for Enterprise',
        title2: 'From advanced analytics to <br/> immobilization, everything <br/>in a single application.',
        subheading2: 'AquilaTrack Web App',
        firstLink: '#',
        secondLink: '#',
    }]);
    const [Features, setFeatures] = useState([
        {
            _id: 1,
            image: Images.SolutionEVSFeatureThirdImage,
            title: 'Advanced Analytics'
        },
        {
            _id: 2,
            image: Images.SolutionEVSFeatureImage,
            title: 'Vehicle Diagnostics'
        },
        {
            _id: 3,
            image: Images.SolutionEVSFeatureSecondImage,
            title: 'Advanced Alerts & Notifications'
        },
        {
            _id: 4,
            image: Images.SolutionEVSFeatureFourthImage,
            title: 'Video Integrations'
        },
        {
            _id: 5,
            image: Images.SolutionEVSFeatureSixthImage,
            title: 'Advanced Reports'
        },
        {
            _id: 6,
            image: Images.SolutionEVSFeatureFifthImage,
            title: 'Geo-Services'
        },
        {
            _id: 7,
            image: Images.SolutionEVSFeatureSeventhImage,
            title: 'Live Tracking & Travel History'
        },
        {
            _id: 8,
            image: Images.SolutionEVSFeatureEightImage,
            title: 'Route Management'
        },
        {
            _id: 9,
            image: Images.SolutionEVSFeatureNinthImage,
            title: 'Trip Management'
        },
        {
            _id: 10,
            image: Images.SolutionEVSFeatureNintheImage,
            title: 'GOD`s View'
        },
        {
            _id: 11,
            image: Images.SolutionEVSFeatureTenthImage,
            title: 'User Management'
        },
        {
            _id: 12,
            image: Images.SolutionEVSFeatureFirstImage,
            title: 'Driver Management'
        },
    ])
    const [FourthSection, setFourthSection] = useState([{
        _id: 1,
        image: Images.SolutionEVSSecondImage,
        title: '99.99% guaranteed Up-Time',
        paragraph: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.',
        firstLink: '#',
        secondLink: '#',
    }]);
    const [FifthSection, setFifthSection] = useState([{
        _id: 1,
        image: Images.SolutionEVSThirdImage,
        title: '99.99% guaranteed Up-Time',
        paragraph: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.',
        firstLink: '#',
        secondLink: '#',
    }]);
    const [SixthSection, setSixthSection] = useState([{
        _id: 1,
        image: Images.SolutionFMS2,
        title: 'Get your fleet related information right at your finger tips. Track and manage your vehicles on the go!',
        paragraph: 'AquilaTrack Mobile App',
        appleLink: '#',
        androidLink: '#',
    }]);
    return (
        <PublicLayout>
            {
                FirstSection.map((e, index) => (<><div class="container-fluid">
                    <div class="row d-flex align-items-center">
                        <div class="col-md-6 col-sm-12 col-lg-6 ">
                            <img src={e.image} class="img-fluid" alt="" />
                        </div>
                        <div class="col-md-6 col-sm-12 col-lg-5 text-sm-start text-md-end  CustomeWidth">
                            <h6 class="mt-4 subHeading">{e.subheading1}</h6>
                            <h4 class="mt-4 CustomeLineHeight heading1" dangerouslySetInnerHTML={{ __html: e.title1 }}></h4>
                            <h6 class="mt-4 subHeading">{e.subheading2}</h6>
                            <h4 class="mt-4 CustomeLineHeight heading1" dangerouslySetInnerHTML={{ __html: e.title2 }}></h4>
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
                SixthSection.map((e, index) => (<LeftRightSection key={`key-${index}-${e._id}`} title={e.title} paragraph={e.paragraph} image={e.image} inverse={false} appleLink={e.appleLink} androidLink={e.androidLink} alignment='right' />))
            }
            <section className="mobile">
                <Container>
                    <div className="text-center">
                        <h1>
                            AquilaTrack Mobile App
                        </h1>
                        <Image src={Images.SolutionFMSApplicationSection} fluid alt="" />
                    </div>
                </Container>
            </section>
            <div class="container mt-5 CustomeMobileCenter">
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-3 mobile-space">
                        <div class="card">
                            <div class="card-body customPaddingCard">
                                <div class="text-center">
                                    <img src={Images.AquilaTrack2} class="img-fluid" width="60%" alt="..." />
                                </div>
                                <div class="card-text mt-4 text-center">
                                    <h5 class="heading1">Faster Reports<br /> Generation</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 mt-md-5 mobile-space">
                        <div class="card h-100">
                            <div class="card-body customPaddingCard">
                                <div class="text-center">
                                    <img src={Images.AquilaTrack3} class="img-fluid" width="58%" alt="..." />
                                </div>
                                <div class="card-text mt-4 text-center">
                                    <h5 class="heading1">Batch Analytics<br /> Integrations</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 mobile-space">
                        <div class="card">
                            <div class="card-body customPaddingCard">
                                <div class="text-center">
                                    <img src={Images.AquilaTrack4} class="img-fluid" width="60%" alt="..." />
                                </div>
                                <div class="card-text mt-4 text-center">
                                    <h5 class="heading1">Optimised MAPS<br /> Usage</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 mt-md-5 mobile-space">
                        <div class="card">
                            <div class="card-body customPaddingCard">
                                <div class="text-center">
                                    <img src={Images.AquilaTrack5} class="img-fluid" width="60%" alt="..." />
                                </div>
                                <div class="card-text mt-4 text-center">
                                    <h5 class="heading1">Upgraded Data<br /> Processing Engine</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                        <a href="#" class="px-5 btn btn-default mt-4" >
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
