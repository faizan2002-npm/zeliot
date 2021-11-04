import React, { useState } from 'react'
import PublicLayout from './../../Layouts/Public/PublicLayout';
import Images from "./../../Constants/Images";
import MilestoneBox from './../../Components/Public/MilestoneBox';
import LeftRightSection from './../../Components/Public/LeftRightSection';
import { Container, Row } from 'react-bootstrap';
import FeaturedCard from './../../Components/Public/FeaturedCard';
import SolutionMenuCard from './../../Components/Public/SolutionMenuCard';
import ReactPlayer from 'react-player';

export const SolutionEVS = () => {
    const [SolutionMenu, setSolutionMenu] = useState([
        {
            _id: 1,
            image: Images.SolutionEVSFirstMenuImage,
            title: 'Fleet Management Solution',
            link:'/SolutionFMS'
        },
        {
            _id: 2,
            image: Images.SolutionEVSFirstMenuImage,
            title: 'OEM & Enterprise Solution',
            link:'/SolutionEVS'
        },
        {
            _id: 3,
            image: Images.SolutionEVSFirstMenuImage,
            title: 'Electric Vehicle Solution',
            link:'/'
        },
        {
            _id: 4,
            image: Images.SolutionEVSFirstMenuImage,
            title: 'Urban Public Transport Solution',
            link:'/'
        },
        {
            _id: 5,
            image: Images.SolutionEVSFirstMenuImage,
            title: 'Logistics Solution',
            link:'/'
        },
        {
            _id: 6,
            image: Images.SolutionEVSFirstMenuImage,
            title: 'Employee Transport Management Solution',
            link:'/'
        },
        {
            _id: 7,
            image: Images.SolutionEVSFirstMenuImage,
            title: 'School Solution',
            link:'/'
        },
        {
            _id: 8,
            image: Images.SolutionEVSFirstMenuImage,
            title: 'Business Admin Solution',
            link:'/'
        },
    ])
    const [FirstSection, setFirstSection] = useState([{
        _id: 1,
        image: Images.SolutionEVSFirstImage,
        title: '99.99% guaranteed Up-Time',
        paragraph: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.',
        firstLink: '#',
        secondLink: '#',
    }]);
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
    const [Features, setFeatures] = useState([
        {
            _id: 1,
            image: Images.SolutionEVSFeatureImage,
            title: 'Lorem Ipsum'
        },
        {
            _id: 2,
            image: Images.SolutionEVSFeatureFirstImage,
            title: 'Lorem Ipsum'
        },
        {
            _id: 3,
            image: Images.SolutionEVSFeatureSecondImage,
            title: 'Lorem Ipsum'
        },
        {
            _id: 4,
            image: Images.SolutionEVSFeatureThirdImage,
            title: 'Lorem Ipsum'
        },
        {
            _id: 5,
            image: Images.SolutionEVSFeatureFourthImage,
            title: 'Lorem Ipsum'
        },
        {
            _id: 6,
            image: Images.SolutionEVSFeatureFifthImage,
            title: 'Lorem Ipsum'
        },
        {
            _id: 7,
            image: Images.SolutionEVSFeatureSixthImage,
            title: 'Lorem Ipsum'
        },
        {
            _id: 8,
            image: Images.SolutionEVSFeatureSeventhImage,
            title: 'Lorem Ipsum'
        },
        {
            _id: 9,
            image: Images.SolutionEVSFeatureEightImage,
            title: 'Lorem Ipsum'
        },
        {
            _id: 10,
            image: Images.SolutionEVSFeatureNinthImage,
            title: 'Lorem Ipsum'
        },
        {
            _id: 11,
            image: Images.SolutionEVSFeatureTenthImage,
            title: 'Lorem Ipsum'
        },
        {
            _id: 12,
            image: Images.SolutionEVSFeatureFirstImage,
            title: 'Lorem Ipsum'
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
        image: Images.SolutionEVSFourthImage,
        title: '99.99% guaranteed Up-Time',
        paragraph: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.',
        firstLink: '#',
        secondLink: '#',
    }]);
    return (
        <PublicLayout>
            <section className="navi-menu">
                {
                    SolutionMenu.map((e, index) => (<SolutionMenuCard key={`key-${index}-${e._id}`} image={e.image} title={e.title} link={e.link} />))
                }
            </section>
            {
                FirstSection.map((e, index) => (<LeftRightSection key={`key-${index}-${e._id}`} title={e.title} paragraph={e.paragraph} image={e.image} inverse={false} exploreLink={e.firstLink} pricingLink={e.secondLink} />))
            }
            <section className="messages">
                <Container fluid>
                    <Row>
                        {
                            Milestone.map((e, index) => (<MilestoneBox key={`key-${index}-${e._id}`} title={e.title} paragraph={e.paragraph} />))
                        }
                    </Row>
                </Container>
            </section>
            <section className="features">
                <Container>
                    <h1>
                        Fleet Management Features
                    </h1>
                    <Row>
                        {
                            Features.map((e, index) => (<FeaturedCard key={`key-${index}-${e._id}`} title={e.title} image={e.image} />))
                        }
                    </Row>
                </Container>
            </section>
            {
                FourthSection.map((e, index) => (<LeftRightSection key={`key-${index}-${e._id}`} title={e.title} paragraph={e.paragraph} image={e.image} inverse={false} exploreLink={e.firstLink} pricingLink={e.secondLink} />))
            }
            {
                FifthSection.map((e, index) => (<LeftRightSection key={`key-${index}-${e._id}`} title={e.title} paragraph={e.paragraph} image={e.image} inverse={true} exploreLink={e.firstLink} pricingLink={e.secondLink} />))
            }
            {
                SixthSection.map((e, index) => (<LeftRightSection key={`key-${index}-${e._id}`} title={e.title} paragraph={e.paragraph} image={e.image} inverse={false} exploreLink={e.firstLink} pricingLink={e.secondLink} />))
            }
            <section className="stry">
                <h1>
                    Success Story
                </h1>
                <div className="container-fluid">
                    {/* <iframe src="https://www.youtube.com/embed/xcJtL7QggTI" title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe> */}
                    <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width="100%" height="auto"/>

                </div>
            </section>
        </PublicLayout>
    )
}
