import * as React from "react"
import styled from "styled-components"

const IndexPage = () => (
  <Wrapper>
    <Logo src="/images/logos/react-logo.svg" alt="logo" />
    <Title>Build a web app</Title>
    <Caption>20 sections!</Caption>
    <Description>Learn how we build.</Description>
  </Wrapper>
)

export default IndexPage

const Wrapper = styled.div`
  height: 1247px;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
`
const Logo = styled.img`
  width: 60px;
  height: 60px;
`
const Title = styled.h1`
  max-width: 500px;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 72px;
  color: #ffffff;
  mix-blend-mode: normal;
  text-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);
`

const Caption = styled.p`
  font-style: normal;
  font-size: 15px;
  line-height: 130%;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
`

const Description = styled.p`
  max-width: 400px;
  font-style: normal;
  font-size: 20px;
  line-height: 140%;
  color: #ffffff;
`
