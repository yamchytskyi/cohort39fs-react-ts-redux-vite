import { v4 } from "uuid"
import { useEffect } from "react"

import { useAppDispatch, useAppSelector } from "store/hooks"

import {
  catFactsSelectors,
  catFactsActions,
} from "store/redux/catFact/catFactSlice"
import { CatFact } from "store/redux/catFact/types"
import Button from "components/Button/Button"

import {
  PageWrapper,
  CatFactCard,
  CatFactContainer,
  CatFactText,
} from "./styles"

function Lesson_18() {
  const dispatch = useAppDispatch()
  const catFacts = useAppSelector(catFactsSelectors.catFacts)
  const error = useAppSelector(catFactsSelectors.error)

  const getCatFact = () => {
    dispatch(catFactsActions.getCatFact())
  }

  const catFactsParagraphs = catFacts.map((catFact: CatFact, index: number) => {
    return (
      <CatFactText key={v4()}>
        {`${index + 1}. `}
        {catFact.fact}
      </CatFactText>
    )
  })

  useEffect(() => {
    if (error) {
      alert(error)
    }
  }, [error])

  return (
    <PageWrapper>
      <CatFactCard>
        <CatFactContainer>
          {catFacts.length > 0 && catFactsParagraphs}
        </CatFactContainer>
        <Button name="Get Cat Fact" onClick={getCatFact} />
      </CatFactCard>
    </PageWrapper>
  )
}

export default Lesson_18
