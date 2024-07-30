import { colors } from "styles/colors"

import styled from "@emotion/styled"

export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px;
  background-color: ${colors.PRIMARY};
`
export const CatFactCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 700px;
  min-height: 300px;
  max-height: 800px;
  overflow-y: auto;
  padding: 40px;
  border: 2px solid black;
  border-radius: 6px;
  background-color: white;
`
export const CatFactContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 30px;
`
export const CatFactText = styled.p`
font-size: 24px;
font-weight: bold;
`