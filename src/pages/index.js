import * as React from "react"
import styled from "styled-components"
import layout from "../components/layout"

const IndexPage = () => (
  <Wrapper>
    
    <Title>H1</Title>
  <Title2>H2</Title2>
    
  </Wrapper>
)

export default IndexPage

const Wrapper = styled.div`
`

const Title = styled.h1`
  max-width: 500px;
  font-style: normal;
  font-weight: 600;
  font-size: 60px;
  line-height: 72px;
  color: #ffffff;
  mix-blend-mode: normal;
  text-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);
`

const Title2 = styled.h2`
max-width: 500px;
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 72px;
  color: #ffffff;
  mix-blend-mode: normal;
  text-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);
`
