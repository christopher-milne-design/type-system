import * as React from "react"
import styled from "styled-components"

const Greys = () => (
  <Wrapper>
    <svg
      width="122"
      height="122"
      viewBox="0 0 122 122"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="60.8889" cy="60.8889" r="60.8889" fill="#ffffff" />
    </svg>
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  align-items: center;
  background-color: white;
  width: auto;
  height: auto;
  padding: 40px;
  gap: 40px;
  border-radius: 15px;
`

export default Greys
