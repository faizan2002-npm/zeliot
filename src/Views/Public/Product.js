import React, { useState } from 'react'
import PublicLayout from './../../Layouts/Public/PublicLayout';
import Images from "./../../Constants/Images";
import MilestoneBox from './../../Components/Public/MilestoneBox';
import LeftRightSection from './../../Components/Public/LeftRightSection';
import { Col, Container, Image, Row } from 'react-bootstrap';
import SolutionMenuCard from './../../Components/Public/SolutionMenuCard';
import PostCard from './../../Components/Public/PostCard';
import { Link } from 'react-router-dom';

export const Product = () => {
    const [FirstSection, setFirstSection] = useState([{
        _id: 1,
        image: Images.SolutionEVSFirstImage,
        title: '99.99% guaranteed Up-Time',
        paragraph: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.',
        firstLink: '#',
        secondLink: '#',
    }]);
    return (
        <PublicLayout>
            <section className="link">
                <Link to="/" className="btn-default">
                    Signup now and get $100 worth free credits!
                </Link>
            </section>
            <section className="bann" style={{
                backgroundColor: "#fff"
            }}>
                <Container>
                    <div className="text-center">
                        <h1 style={{
                            color: "#000"
                        }}>
                            Custom Built Solutions based on Customer Needs
                        </h1>
                        <Image fluid src={Images.SolutionSection} className="w-100" />
                    </div>
                    <Row>
                        <Col lg={6} md={6} xs={12} className="align-self-center">
                            <h1 style={{
                                color: "#000"
                            }}>
                                Lorem Ipsum dior Lorem Ipsum dior Lorem Ipsum dior Lorem Ipsum dior.
                            </h1>
                            <p style={{
                                color: "#000"
                            }}>
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
                                    <Link href="/" className="btn btn-default-2" style={{
                                        color: "#000",
                                        borderColor: "#000"
                                    }}>
                                        CHECK PRICING
                                    </Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            {
                FirstSection.map((e, index) => (<LeftRightSection key={`key-${index}-${e._id}`} theme='light' key={`key-${index}-${e._id}`} title={e.title} paragraph={e.paragraph} image={e.image} inverse={false} exploreLink={e.firstLink} pricingLink={e.secondLink} />))
            }
            {
                FirstSection.map((e, index) => (<LeftRightSection key={`key-${index}-${e._id}`} theme='light' key={`key-${index}-${e._id}`} title={e.title} paragraph={e.paragraph} image={e.image} inverse={true} exploreLink={e.firstLink} pricingLink={e.secondLink} />))
            }
            {
                FirstSection.map((e, index) => (<LeftRightSection key={`key-${index}-${e._id}`} theme='light' key={`key-${index}-${e._id}`} title={e.title} paragraph={e.paragraph} image={e.image} inverse={false} exploreLink={e.firstLink} pricingLink={e.secondLink} />))
            }
            {
                FirstSection.map((e, index) => (<LeftRightSection key={`key-${index}-${e._id}`} theme='light' key={`key-${index}-${e._id}`} title={e.title} paragraph={e.paragraph} image={e.image} inverse={true} exploreLink={e.firstLink} pricingLink={e.secondLink} />))
            }
            {
                FirstSection.map((e, index) => (<LeftRightSection key={`key-${index}-${e._id}`} theme='light' key={`key-${index}-${e._id}`} title={e.title} paragraph={e.paragraph} image={e.image} inverse={false} exploreLink={e.firstLink} pricingLink={e.secondLink} />))
            }
            {
                FirstSection.map((e, index) => (<LeftRightSection key={`key-${index}-${e._id}`} theme='light' key={`key-${index}-${e._id}`} title={e.title} paragraph={e.paragraph} image={e.image} inverse={true} exploreLink={e.firstLink} pricingLink={e.secondLink} />))
            }
        </PublicLayout>
    )
}
