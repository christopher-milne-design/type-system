import * as React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <CircleWrapper>
      <CircleAndText>
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="100" fill="#EF8D8B" />
        </svg>

        <p>1 42 94</p>
      </CircleAndText>
      <CircleAndText>
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="100" fill="#68D98C" />
        </svg>

        <p>139 52 85</p>
      </CircleAndText>
      <CircleAndText>
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="100" fill="#7EA6D9" />
        </svg>

        <p>213 42 85</p>
      </CircleAndText>
    </CircleWrapper>
  </Layout>
)

export default IndexPage

const CircleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 40px;
  max-width: auto;
  height: auto;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  margin: 120px;
`
const CircleAndText = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px;
  gap: 40px;
  align-items: center;
`

const Button = styled.div`
  max-width: 80px;
  background-color: white;
  padding: 24px;
  border-radius: 15px;

  :hover {
    background-color: #ececec;
    box-shadow: 0px 4.09903px 12.2971px 2.04952px rgba(0, 0, 0, 0.01),
      inset 0px -4.09903px 6.14855px 2.04952px rgba(255, 255, 255, 0.1);
  }
`
