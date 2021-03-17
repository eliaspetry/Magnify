import * as React from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import backgroundVideo from "../static/background-video.mp4";
import logo from "../static/logo.png";
import { FAQPanel }  from "../components/FAQ";
import { ConversionForm } from "../components/ConversionForm";
import sync from 'css-animation-sync';


/*Library to sync the glow effect on the input fields again after focus or hover disrupt*/
sync("neon-glow");

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <>
      <Row>
        <Col className="centered">
          <Image src={logo} alt="logo" className="sitelogo"/>
        </Col>
      </Row>
      <Row>
        <Col className="centered">
          <h2 className="siteslogan">La agencia de marketing digital con flow, <span className="emphasize">100% online.</span><br/>Conecta con tu audiencia. Maximiza tu impacto.</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4 className="conversion-form-services">SEO ● SEM ● Redes Sociales ● Branded Content ● Diseño Web ● Analytics ● Copy ● Display</h4>
        </Col>
      </Row>
    </>
  );
};


interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <Row className="footer-container">
      <Col className="centered">
        <p className="footer-container-info">© 2020-2021. | Mock-up de una Landing Page para la asignatura de Marketing en Internet | Autor: Elias Petry.</p>
      </Col>
    </Row>
  );
};


interface IHomeProps {
}


const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <>
    <video autoPlay muted loop id="main-video">
      <source src={backgroundVideo} type="video/mp4"></source>
    </video>
    <Container fluid className="main-container">
      <Header></Header>
      <ConversionForm></ConversionForm>
      <FAQPanel></FAQPanel>
      <Footer></Footer>
    </Container>
    </>
  );
};


export { Home };