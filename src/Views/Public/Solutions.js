import React, { useState } from 'react'
import PublicLayout from './../../Layouts/Public/PublicLayout';
import Images from "./../../Constants/Images";
import MilestoneBox from './../../Components/Public/MilestoneBox';
import LeftRightSection from './../../Components/Public/LeftRightSection';
import { Col, Container, Image, Row } from 'react-bootstrap';
import SolutionMenuCard from './../../Components/Public/SolutionMenuCard';
import PostCard from './../../Components/Public/PostCard';
import { Link } from 'react-router-dom';

export const Solutions = () => {
    const [FirstSection, setFirstSection] = useState([{
        _id: 1,
        image: Images.SolutionEVSFirstImage,
        title: '99.99% guaranteed Up-Time',
        paragraph: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.',
        firstLink: '#',
        secondLink: '#',
    }]);
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
    const [Post, setPost] = useState([
        {
            _id: 1,
            title: 'Managing inventory has never been easier, be it Telematics devices or SIM cards. We got you covered.',
            paragraph: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.',
            link: '/',
            image: Images.PostCard,
        },
        {
            _id: 2,
            title: 'Looking for an easier way to plan everyday trips for your employees? You’ll love Automatic Routing!',
            paragraph: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.',
            link: '/',
            image: Images.PostCard,
        }
    ])
    return (
        <PublicLayout>
            <section className="navi-menu">
                {
                    SolutionMenu.map((e, index) => (<SolutionMenuCard key={`key-${index}-${e._id}`} image={e.image} title={e.title} link={e.link} />))
                }
            </section>
            {/* <section className="iop">
                <div className="">
                    <img src="img/zeliot10.png" className="w-100 img-fluid" alt="" />
                </div>
            </section> */}
            <section className="messages">
                <Container fluid>
                    <Row>
                        {
                            Milestone.map((e, index) => (<MilestoneBox key={`key-${index}-${e._id}`} title={e.title} paragraph={e.paragraph} />))
                        }
                    </Row>
                </Container>
            </section>
            <section className="bann">
                <div className="container">
                    <div className="text-center">
                        <h1>
                            Custom Built Solutions based on Customer Needs
                        </h1>
                        <Image fluid src={Images.SolutionSection} className="w-100" />
                    </div>
                    <Row>
                        <Col lg={6} md={6} xs={12} className="align-self-center">
                            <h1>
                                Lorem Ipsum dior Lorem Ipsum dior Lorem Ipsum dior Lorem Ipsum dior.
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                                et justo duo dolores et ea rebum. Stet clita kasd.
                            </p>
                            <Row>
                                <Col lg={6} md={6} xs={12}>
                                    <Link href="/" className="btn btn-default">
                                        EXPLORE CMP
                                    </Link>
                                </Col>
                                <Col lg={6} md={6} xs={12}>
                                    <Link href="/" className="btn btn-default-2">
                                        CHECK PRICING
                                    </Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </section>
            {
                FirstSection.map((e, index) => (<LeftRightSection key={`key-${index}-${e._id}`} theme='dark' key={`key-${index}-${e._id}`} title={e.title} paragraph={e.paragraph} image={e.image} inverse={true} exploreLink={e.firstLink} pricingLink={e.secondLink} />))
            }
            <section className="never">
                <Container>
                    <Row>
                        {
                            Post.map((e, index) => (<PostCard key={`key-${index}-${e._id}`} image={e.image} title={e.title} paragraph={e.paragraph} link={e.link} />))
                        }
                    </Row>
                </Container>
            </section>
            {
                FirstSection.map((e, index) => (<LeftRightSection key={`key-${index}-${e._id}`} theme='light' key={`key-${index}-${e._id}`} title={e.title} paragraph={e.paragraph} image={e.image} inverse={false} exploreLink={e.firstLink} pricingLink={e.secondLink} />))
            }
            <section className="action">
                <div className="container">
                    <h1>
                        See our solution live, in action
                    </h1>
                    <div className="text-center">
                        <Image fluid src={Images.SolutionActionSection}  alt="" />
                    </div>
                </div>
            </section>
        </PublicLayout>
    )
}
