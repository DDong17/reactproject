
import { Col, Container,Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import BTS from "../assets/img/BTS.png";
import BLACKPINK from "../assets/img/BLACKPINK.png";
import Idle from "../assets/img/Idle.png";
import NEWJEANS from "../assets/img/NEWJEANS.png";

export const Groups = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        < section className="gruops" id="groups">
            <Container >
                <Row>
                    <Col>
                        <div className="gruops-bx">
                            <h2>
                                Groups
                            </h2>
                            <p>아무거나</p>
                            <Carousel responsive={responsive} infinite={true} className ="gruops-slider">
                                <div className="item">
                                <img src={BTS} alt="Image"/>
                                <h5>BTS(방탄소년단)</h5>
                                </div>
                                <div className="item">
                                <img src={BLACKPINK} alt="Image"/>
                                <h5>BLACKPINK</h5>
                                </div>
                                <div className="item">
                                <img src={NEWJEANS} alt="Image"/>
                                <h5>뉴진스</h5>
                                </div>
                                <div className="item">
                                <img src={Idle} alt="Image"/>
                                <h5>(여자)아이들</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>

            <img className="background-image-left" src={colorSharp} />
        </section >
    )
}
