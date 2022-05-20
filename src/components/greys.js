import * as React from "react"
import styled from "styled-components"

const Greys = () => (
  <Wrapper>
    <SvgWrapper>
      <svg
        width="92"
        height="92"
        viewBox="0 0 92 92"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="45.8318" cy="45.8889" r="45.2317" fill="#1C1E1F" />
      </svg>
      <SvgText>900</SvgText>
    </SvgWrapper>
    <SvgWrapper>
      <svg
        width="92"
        height="92"
        viewBox="0 0 92 92"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="46.1238" cy="45.8889" r="45.2317" fill="#2F3233" />
      </svg>
      <SvgText>800</SvgText>
    </SvgWrapper>
    <SvgWrapper>
      <svg
        width="91"
        height="92"
        viewBox="0 0 91 92"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="45.4158" cy="45.8889" r="45.2317" fill="#6D7173" />
      </svg>
      <SvgText>700</SvgText>
    </SvgWrapper>
    <SvgWrapper>
      <svg
        width="91"
        height="92"
        viewBox="0 0 91 92"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="45.7083" cy="45.8889" r="45.2317" fill="#84888A" />
      </svg>
      <SvgText>600</SvgText>
    </SvgWrapper>
    <SvgWrapper>
      <svg
        width="92"
        height="92"
        viewBox="0 0 92 92"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="46.0003"
          cy="45.8889"
          r="44.8603"
          fill="#B3B8BA"
          stroke="#84888A"
          stroke-width="0.742857"
        />
      </svg>
      <SvgText>500</SvgText>
    </SvgWrapper>
    <SvgWrapper>
      <svg
        width="91"
        height="92"
        viewBox="0 0 91 92"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="45.2918"
          cy="45.8889"
          r="44.8603"
          fill="#D0D4D6"
          stroke="#B3B8BA"
          stroke-width="0.742857"
        />
      </svg>
      <SvgText>400</SvgText>
    </SvgWrapper>
    <SvgWrapper>
      <svg
        width="91"
        height="92"
        viewBox="0 0 91 92"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="45.5838"
          cy="45.8889"
          r="44.8603"
          fill="#E4E8EB"
          stroke="#D0D4D6"
          stroke-width="0.742857"
        />
      </svg>
      <SvgText>300</SvgText>
    </SvgWrapper>
    <SvgWrapper>
      <svg
        width="92"
        height="92"
        viewBox="0 0 92 92"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="45.8763"
          cy="45.8889"
          r="44.8603"
          fill="#F0F5F7"
          stroke="#E3E8EB"
          stroke-width="0.742857"
        />
      </svg>
      <SvgText>200</SvgText>
    </SvgWrapper>
    <SvgWrapper>
      <svg
        width="92"
        height="92"
        viewBox="0 0 92 92"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="46.1683"
          cy="45.8889"
          r="44.8603"
          fill="#FAFCFC"
          stroke="#F0F5F7"
          stroke-width="0.742857"
        />
      </svg>
      <SvgText>100</SvgText>
    </SvgWrapper>
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  align-items: center;
  background-color: white;
  max-width: 1040px;
  height: auto;
  padding: 40px;
  gap: 16px;
  border-radius: 15px;
  margin: 120px;
`
const SvgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  max-width: 1040px;
`
const SvgText = styled.p`
  color: black;
  font-size: 14px;
  font-weight: 600;
`
export default Greys
