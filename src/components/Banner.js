import { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
export const Banner = () => {
  const [loopNum, setloopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toBeRotated = [
    "Web Developer",
    "Back-End Developer",
    "Full Stack Developer",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toBeRotated.length;
    let fullText = toBeRotated[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updateText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setDelta(500);
      setloopNum(loopNum + 1);
    }
  };
  return (
    <section className="banner">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my portfolio</span>
            <h1>
              {`Hi, I'm Nisarg Parikh - `}
              <span className="wrap">{text}</span>
            </h1>
            <p>I love machines... I can talk to them !</p>
            <button onClick={() => console.log("connect")}>
              Let's connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <img src={headerImg} alt="Header Image" />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </section>
  );
};
