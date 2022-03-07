import React from "react";
import { Container, Row, Col } from "reactstrap";

const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <h3 className="text-uppercase text-primary font-weight-large f-14 mb-4 font-bold text-3xl">
                WELCOME TO PRIMERO!
              </h3>
              <h3 className="text-uppercase text-primary font-weight-large f-14 mb-4 font-light text-xl">
                THE WORLD FIRST DECENTRALIZED WEB3 EDUCATIONAL PLATFORM
              </h3>
              <p className="mb-4 font-weight-normal line-height-1_4 font-bold text-xl">
                Learn New Skills by Buying and Selling Courses as NFTs{" "}
              </p>
              <p className="text-muted mb-4 pb-2 text-lg">
                Welcome to Primero! Primero is the first decentralized web3
                platform and marketplace for online learning and teaching that
                revolutionizes access to courses and skills in developing
                countries in Africa and Latin America.
                <br />
                <br />
                As a Student, on Primero you can buy a course as an NFT, finish
                the course at your own pace, and get an NFT certificate
                afterwards! You can also list and sell your course as an NFT
                with a first timer purchase advantage!
                <br />
                <br />
                As an Instructor, Primero offers you the first web3 platform to
                upload your courses, monitor your student progress, and earn new
                revenue streams in crypto for the content you created.
                <br />
                <br />
                Join Primero to create the first web3 learning and teaching
                ecosystem that will enable future generations to prosper and
                develop in Africa and Latin America. Together, WE CAN!
              </p>
              <button
                className="ml-2 right-icon btn btn-warning text-black font-bold py-2 px-12 rounded"
                // onClick={() => buyNft(nft)}
              >
                {" "}
                Buy your first decentralized course{" "}
              </button>{" "}
            </div>
          </Col>
          <Col lg={6}>
            <div>
              <img
                src="https://img.freepik.com/free-photo/studio-portrait-collage-diverse-people_53876-137629.jpg?w=996"
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
