import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import Pie from "./Pie";
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    table: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Lorem Imsum is really dummy. Sample Text shown just for
                showcasing purpose. Change later
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <Pie percentage={85} colour="#6f32a4" /> <h5>C#/.Net</h5>
                </div>
                <div className="item">
                  <Pie percentage={80} colour="#6f32a4" /> <h5>NodeJS</h5>
                </div>
                <div className="item">
                  <Pie percentage={85} colour="#6f32a4" /> <h5>Java</h5>
                </div>
                <div className="item">
                  <Pie percentage={80} colour="#6f32a4" /> <h5>Rust</h5>
                </div>
                <div className="item">
                  <Pie percentage={95} colour="#5b4db1" />
                  <h5>HTML5/CSS3/JS</h5>
                </div>
                <div className="item">
                  <Pie percentage={75} colour="#5b4db1" /> <h5>React</h5>
                </div>
                <div className="item">
                  <Pie percentage={75} colour="#5b4db1" /> <h5>Typescript</h5>
                </div>
                <div className="item">
                  <Pie percentage={80} colour="#61c2fa" />
                  <h5>Docker/Virtualization</h5>
                </div>
                <div className="item">
                  <Pie percentage={80} colour="#61c2fa" />
                  <h5>CI/CD</h5>
                </div>
                <div className="item">
                  <Pie percentage={85} colour="#61c2fa" />
                  <h5>Linux/Shell scripting</h5>
                </div>
                <div className="item">
                  <Pie percentage={85} colour="#0e536d" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <Pie percentage={95} colour="#1f6a88" />
                  <h5>Selenium/Playwright</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};
