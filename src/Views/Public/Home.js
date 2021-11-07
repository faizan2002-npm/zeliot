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
                FirstSection.map((e, index) => (<LeftRightSection key={`key-${index}-${e._id}`} title={e.title} paragraph={e.paragraph} image={e.image} inverse={false} exploreLink={e.firstLink} pricingLink={e.secondLink} />))
            }
            {
                FirstSection.map((e, index) => (<LeftRightSection key={`key-${index}-${e._id}`} title={e.title} paragraph={e.paragraph} image={e.image} inverse={true} exploreLink={e.firstLink} pricingLink={e.secondLink} />))
            }
            {
                FirstSection.map((e, index) => (<LeftRightSection key={`key-${index}-${e._id}`} title={e.title} paragraph={e.paragraph} image={e.image} inverse={false} exploreLink={e.firstLink} pricingLink={e.secondLink} />))
            }
            {
                FirstSection.map((e, index) => (<LeftRightSection key={`key-${index}-${e._id}`} title={e.title} paragraph={e.paragraph} image={e.image} inverse={true} exploreLink={e.firstLink} pricingLink={e.secondLink} />))
            }
            {
                FirstSection.map((e, index) => (<LeftRightSection key={`key-${index}-${e._id}`} title={e.title} paragraph={e.paragraph} image={e.image} inverse={false} exploreLink={e.firstLink} pricingLink={e.secondLink} />))
            }
            {
                FirstSection.map((e, index) => (<LeftRightSection key={`key-${index}-${e._id}`} title={e.title} paragraph={e.paragraph} image={e.image} inverse={true} exploreLink={e.firstLink} pricingLink={e.secondLink} />))
            }
        </PublicLayout>
    )
}
