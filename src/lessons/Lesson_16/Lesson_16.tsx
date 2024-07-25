import Counter from "components/Counter/Counter"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  counterSliceSelectors,
  counterSliceAction,
} from "store/redux/counter/counterSlice"

import { PageWrapper } from "./styles"

function Lesson_16() {
  const dispatch = useAppDispatch()
  const count = useAppSelector(counterSliceSelectors.count)

  const onPlus = () => {
    dispatch(counterSliceAction.plus())
  }

  const onMinus = () => {
    dispatch(counterSliceAction.minus())
    // console.log(counterSliceAction.minus())
  }

  const onMultiply = () => {
    dispatch(counterSliceAction.multiply(3))
  }

  const onDivide = () => {
    dispatch(counterSliceAction.divide(2))
  }

  return (
    <PageWrapper>
      <Counter
        count={count}
        onMinus={onMinus}
        onPlus={onPlus}
        onDivide={onDivide}
        onMultiply={onMultiply}
      />
    </PageWrapper>
  )
}

export default Lesson_16
