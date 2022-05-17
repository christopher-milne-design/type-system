import * as React from "react"
import styled from "styled-components"
import layout from "../components/layout"

const IndexPage = () => (
  <Wrapper>
    <CardWrapper>
      <Card>
        <Heading1>H1</Heading1>
        <Heading2>H2</Heading2>
        <Heading3>H3</Heading3>
      </Card>

      <a href="/page-2">
        <Button>lick me</Button>
      </a>
    </CardWrapper>
  </Wrapper>
)

export default IndexPage

const Wrapper = styled.div`
  align-items: center;
  max-width: 1040px;
`

const Heading1 = styled.h1`
  max-width: 500px;
  font-style: normal;
  font-weight: 600;
  font-size: 60px;
  line-height: 72px;
  color: #000000;
  mix-blend-mode: normal;
`

const Heading2 = styled.h2`
  max-width: 500px;
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 72px;
  color: #000000;
  mix-blend-mode: normal;
`
const Heading3 = styled.h3`
  max-width: 500px;
  font-style: normal;
  font-weight: 600;
  font-size: 42px;
  line-height: 72px;
  color: #000000;
  mix-blend-mode: normal;
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 40px;
  max-width: 400px;
  height: auto;
  background-color: white;
  border-radius: 15px;
`
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;
  margin-top: 124px;
  align-items: center;
`
const Button = styled.div`
  background-color: white;
  padding: 24px;
  border-radius: 15px;

  :hover {
    background-color: #ececec;
    box-shadow: 0px 4.09903px 12.2971px 2.04952px rgba(0, 0, 0, 0.01),
      inset 0px -4.09903px 6.14855px 2.04952px rgba(255, 255, 255, 0.1);
  }
`
