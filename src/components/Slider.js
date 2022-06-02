import {
  ArrowLeft,
  ArrowRight,
  ArrowRightAlt,
  StarOutlineRounded
} from "@material-ui/icons";
import { useLinkClickHandler } from "react-router-dom";
import styled from "styled-components";
import HomePageGirl from "../Images/home-page-girl.jpg";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  /* background-color: coral; */
  position: relative;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  overflow: hidden;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #${(props) => props.bg};
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3em;
  font-size: 1rem;
  background-color: transparent;
  cursor: pointer;
  /* border: none; */
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  opacity: 0.7;
  cursor: pointer;
`;

export default function Slider() {
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeft />
      </Arrow>
      <Wrapper>
        <Slide bg="fcf1ed">
          <ImageContainer>
            <Image src={HomePageGirl} />
          </ImageContainer>
          <InfoContainer>
            <Title>SUMMER SALE!</Title>
            <Description>
              TOP-TRENDING PICKS {<StarOutlineRounded />} WEAR YOUR FASHION
            </Description>
            <Button>CHECK IT OUT {<ArrowRightAlt />}</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="f5fafd">
          <ImageContainer>
            <Image src={HomePageGirl} />
          </ImageContainer>
          <InfoContainer>
            <Title>POPULAR SALE!</Title>
            <Description>
              TOP-TRENDING PICKS {<StarOutlineRounded />} WEAR YOUR FASHION
            </Description>
            <Button>CHECK IT OUT {<ArrowRightAlt />}</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="fbf0f4">
          <ImageContainer>
            <Image src={HomePageGirl} />
          </ImageContainer>
          <InfoContainer>
            <Title>50% OFF</Title>
            <Description>
              TOP-TRENDING PICKS {<StarOutlineRounded />} WEAR YOUR FASHION
            </Description>
            <Button>CHECK IT OUT {<ArrowRightAlt />}</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRight />
      </Arrow>
    </Container>
  );
}

