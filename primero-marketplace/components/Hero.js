import React from "react";
import { Container, Row, Col } from "reactstrap";
const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <h3 className="text-uppercase text-primary font-weight-large f-14 mb-4">
                WORLD'S FIRST DECENTRALIZED EDUCATIONAL APP
              </h3>
              <h1 className="mb-4 font-weight-normal line-height-1_4">
                Buy a course as an NFT!{" "}
              </h1>
              <p className="text-muted mb-4 pb-2">
                Welcome to Primero! The first decentralized course purchase
                platform. On Primero, you can buy a course as an NFT, finish the
                course at your pace and get a POAP afterwards! You can also list
                your course as an NFT with first timer purchase advantage!
              </p>
              <a href="/dashboard" className="btn btn-warning">
                Buy your first decentralized course now{" "}
                <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img
                src="https://media.istockphoto.com/photos/happy-multi-generational-women-having-fun-together-multiracial-on-picture-id1308419138?k=20&m=1308419138&s=612x612&w=0&h=PCM6DTruBSKoDrCkPayykUpkYRWbsGD5kbWn4SxfgSs="
                alt=""
                className="img-fluid mx-auto d-block"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Hero;
