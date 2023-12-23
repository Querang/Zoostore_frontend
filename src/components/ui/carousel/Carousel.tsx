import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Col, Image, Row} from "react-bootstrap";
import AdvertiseCard from "../cards/advertise/AdvertiseCard";
import Container from "react-bootstrap/Container";
import "./Carousel.css"
function AdvertisementCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
            <Carousel.Item>
                <Container>
                    <Row>
                        <Col><AdvertiseCard/></Col>
                    </Row>
                </Container>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Container>
                    <Row>
                        <Col><AdvertiseCard/></Col>
                    </Row>
                </Container>
                <Carousel.Caption>
                    Ночь темна и полна ужасов
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Container>
                    <Row>
                        <Col><AdvertiseCard/></Col>
                    </Row>
                </Container>
                <Carousel.Caption>
                    Ночь темна и полна ужасов
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default AdvertisementCarousel;