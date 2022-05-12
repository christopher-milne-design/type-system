import * as React from "react"
import styled from "styled-components"
import layout from "../components/layout"

const IndexPage = () => (
  <Wrapper>
    <CardWrapper>
      <Card>
        <Title>H1</Title>
        <Title2>H2</Title2>
      </Card>
      <Card>
        <Title>H1</Title>
        <Title2>H2</Title2>
      </Card>
      <Button>
        <a href="/page-2">lick me</a>
      </Button>
    </CardWrapper>
  </Wrapper>
)

export default IndexPage

const Wrapper = styled.div`
  align-items: center;
  max-width: 1040px;
`

const Title = styled.h1`
  max-width: 500px;
  font-style: normal;
  font-weight: 600;
  font-size: 60px;
  line-height: 72px;
  color: #000000;
  mix-blend-mode: normal;
  text-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);
`

const Title2 = styled.h2`
  max-width: 500px;
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 72px;
  color: #000000;
  mix-blend-mode: normal;
  text-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);
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
  }
`
