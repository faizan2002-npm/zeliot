import React, { useState } from 'react'
import PublicLayout from './../../Layouts/Public/PublicLayout';
import Images from "./../../Constants/Images";
import MilestoneBox from './../../Components/Public/MilestoneBox';
import LeftRightSection from './../../Components/Public/LeftRightSection';
import { Container, Row } from 'react-bootstrap';
import FeaturedCard from './../../Components/Public/FeaturedCard';
import SolutionMenuCard from './../../Components/Public/SolutionMenuCard';
// import ReactPlayer from 'react-player';

export const Home = () => {
    const [FirstSection, setFirstSection] = useState([{
        _id: 1,
        image: Images.Home1,
        title: 'Meet the all new Zeliot Connected Mobility Platform!',
        paragraph: 'Zeliot CMP is scalable, portable, elastic and a device agnostic IoT platform with a focus on Automotive Telematics. The platform is capable of processing huge amounts of data coming from edge devices every millisecond efficiently.',
        firstLink: '#',
        secondLink: '#',
    }]);
    const [SecondSection, setSecondSection] = useState([{
        _id: 1,
        image: Images.Home2,
        title: 'Hardware device Agnostic',
        paragraph: 'The Zeliot CMP has more than 1000 different types of telematics devices configured. Just power on any of these 1000 devices and configure them to send data to Zeliot CMP to get started instantly. Yes it is that easy!',
        firstLink: '#',
        secondLink: '#',
    }]);
    const [ThirdSection, setThirdSection] = useState([{
        _id: 1,
        image: Images.Home3,
        title: 'Build Your Own Solutions!',
        paragraph: 'With more than 450+ APIs on offer, you can go ahead and build your own custom IoT solutions. Leave all the heavy lifting like on us. The APIs cover wide range of functionality and you get access from a single parameter to complex features.',
        firstLink: '#',
        secondLink: '#',
    }]);
    const [FourthSection, setFourthSection] = useState([{
        _id: 1,
        image: Images.Home4,
        title: 'Highly Customisable',
        paragraph: 'We take pride in being able to serve the exact requirements of a customer. The platform along with all the pre built solutions are highly customisable as the entire business logic is built on a microservices architecture.',
        firstLink: '#',
        secondLink: '#',
    }]);
    const [FifthSection, setFifthSection] = useState([{
        _id: 1,
        image: Images.Home5,
        title: 'Highly Secure',
        paragraph: 'The platform and the solutions are built with security in mind. The data entering into the platform needs to have a valid token and should be encrypted. The platform provides provision of adding custom encryption algorithms with minimal effort.',
        firstLink: '#',
        secondLink: '#',
    }]);
    const [SixthSection, setSixthSection] = useState([{
        _id: 1,
        image: Images.Home6,
        title: '99.99% guaranteed Up-Time',
        paragraph: 'The entire software suite comes with the guaranteed uptime of 99.9%. As each and every component is built in-house, the alerts and fail over mechanisms are in place to take care of anomalies asap thereby guaranteeing the uptime.',
        firstLink: '#',
        secondLink: '#',
    }]);
    const [SeventhSection, setSeventhSection] = useState([{
        _id: 1,
        image: Images.Home7,
        title: 'Custom Business Models',
        paragraph: 'Every customer has different use cases for the same platform and solutions. Hence Zeliot allows customers to pick and choose the solutions and managed services modularly and in a cost effective manner.',
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
    ]);
    return (
        <PublicLayout>
            {
                FirstSection.map((e, index) => (<LeftRightSection key={`key-${index}-${e._id}`} title={e.title} paragraph={e.paragraph} image={e.image} inverse={true} exploreLink={e.firstLink} pricingLink={e.secondLink} />))
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
            {
                SecondSection.map((e, index) => (<LeftRightSection heading='Why go for Zeliot’s Connected Mobility Platform & Solution?' key={`key-${index}-${e._id}`} title={e.title} paragraph={e.paragraph} image={e.image} inverse={false} exploreLink={e.firstLink} pricingLink={e.secondLink} />))
            }
            {
                ThirdSection.map((e, index) => (<LeftRightSection key={`key-${index}-${e._id}`} title={e.title} paragraph={e.paragraph} image={e.image} inverse={true} exploreLink={e.firstLink} pricingLink={e.secondLink} />))
            }
            {
                FourthSection.map((e, index) => (<LeftRightSection key={`key-${index}-${e._id}`} title={e.title} paragraph={e.paragraph} image={e.image} inverse={false} exploreLink={e.firstLink} pricingLink={e.secondLink} />))
            }
            {
                FifthSection.map((e, index) => (<LeftRightSection key={`key-${index}-${e._id}`} title={e.title} paragraph={e.paragraph} image={e.image} inverse={true} exploreLink={e.firstLink} pricingLink={e.secondLink} />))
            }
            {
                SixthSection.map((e, index) => (<LeftRightSection key={`key-${index}-${e._id}`} title={e.title} paragraph={e.paragraph} image={e.image} inverse={false} exploreLink={e.firstLink} pricingLink={e.secondLink} />))
            }
            {
                SeventhSection.map((e, index) => (<LeftRightSection key={`key-${index}-${e._id}`} title={e.title} paragraph={e.paragraph} image={e.image} inverse={true} exploreLink={e.firstLink} pricingLink={e.secondLink} />))
            }
        </PublicLayout>
    )
}
