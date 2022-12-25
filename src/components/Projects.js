import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";


//이미지 카드
export const Projects = () => {
    const projects = [
        {
            // title: "Business Startup",
            // description: "Design & Development",
            imgUrl: "https://www.youtube.com/embed/kXpOEzNZ8hQ",
        },
        {
            // title: "Business Startup",
            // description: "Design & Development",
            imgUrl: "https://www.youtube.com/embed/WMweEpGlu_U",
        },
        {
            // title: "Business Startup",
            // description: "Design & Development",
            imgUrl: "https://www.youtube.com/embed/CuklIb9d3fI",
        },
        {
            // title: "Business Startup",
            // description: "Design & Development",
            imgUrl: "https://www.youtube.com/embed/-5q5mZbe3V8",
        },
        {
            // title: "Business Startup",
            // description: "Design & Development",
            imgUrl: "https://www.youtube.com/embed/gdZLi9oWNZg",
        },
        {
            // title: "Business Startup",
            // description: "Design & Development",
            imgUrl: "https://www.youtube.com/embed/7C2z4GqqS5E",
        },
    ]

    const projects2 = [
        {
            // title: "Business Startup",
            // description: "Design & Development",
            imgUrl: "https://www.youtube.com/embed/POe9SOEKotk",
        },
        {
            // title: "Business Startup",
            // description: "Design & Development",
            imgUrl: "https://www.youtube.com/embed/gQlMMD8auMs",
        },
        {
            // title: "Business Startup",
            // description: "Design & Development",
            imgUrl: "https://www.youtube.com/embed/dyRsYk0LyA8",
        },
        {
            // title: "Business Startup",
            // description: "Design & Development",
            imgUrl: "https://www.youtube.com/embed/vRXZj0DzXIA",
        },
        {
            // title: "Business Startup",
            // description: "Design & Development",
            imgUrl: "https://www.youtube.com/embed/ioNng23DkIM",
        },
        {
            // title: "Business Startup",
            // description: "Design & Development",
            imgUrl: "https://www.youtube.com/embed/2S24-y0Ij3Y",
        },
    ]
    const projects3 = [
        

        {
            // title: "Business Startup",
            // description: "Design & Development",
            imgUrl: "https://www.youtube.com/embed/pSUydWEqKwE",
        },
        {
            // title: "Business Startup",
            // description: "Design & Development",
            imgUrl: "https://www.youtube.com/embed/js1CtxSY38I",
        },
        {
            // title: "Business Startup",
            // description: "Design & Development",
            imgUrl: "https://www.youtube.com/embed/9wUKhEgnllc",
        },
        {
            // title: "Business Startup",
            // description: "Design & Development",
            imgUrl: "https://www.youtube.com/embed/VOmIplFAGeg",
        },
        {
            // title: "Business Startup",
            // description: "Design & Development",
            imgUrl: "https://www.youtube.com/embed/x8RIixqumUc",
        },
        {
            // title: "Business Startup",
            // description: "Design & Development",
            imgUrl: "https://www.youtube.com/embed/S4UEJePR0UE",
        },
    ]
    const projects4 = [
        {
            // title: "Business Startup",
            // description: "Design & Development",
            imgUrl: "https://www.youtube.com/embed/fCO7f0SmrDc",
        },
        {
            // title: "Business Startup",
            // description: "Design & Development",
            imgUrl: "https://www.youtube.com/embed/Jh4QFaPmdss",
        },
        {
            // title: "Business Startup",
            // description: "Design & Development",
            imgUrl: "https://www.youtube.com/embed/z3szNvgQxHo",
        },
        {
            // title: "Business Startup",
            // description: "Design & Development",
            imgUrl: "https://www.youtube.com/embed/HPQ5mqovXHo",
        },
        {
            // title: "Business Startup",
            // description: "Design & Development",
            imgUrl: "https://www.youtube.com/embed/I66oFXdf0KU",
        },
        {
            // title: "Business Startup",
            // description: "Design & Development",
            imgUrl: "https://www.youtube.com/embed/2cevbhEqQF4",
        },

    ]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Video</h2>
                        
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">BTS </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="second">BLACKPINK </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">뉴진스 </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">(여자)아이들 </Nav.Link>
                                </Nav.Item>
                                {/* <Nav.Item>
                                    <Nav.Link eventKey="fourth">뉴진스 </Nav.Link>
                                </Nav.Item> */}
                                
                            </Nav>


                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey={"second"}>
                                    <Row>
                                        {
                                            projects2.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey={"third"}>
                                    <Row>
                                        {
                                            projects3.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey={"fourth"}>
                                    <Row>
                                        {
                                            projects4.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section >
    )
}