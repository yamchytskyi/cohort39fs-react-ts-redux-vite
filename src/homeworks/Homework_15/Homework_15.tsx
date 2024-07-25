import { useState } from "react"

import Counter from "components/Counter/Counter"
import Button from "components/Button/Button"
import Input from "components/Input/Input"

import { VegiCountFormWrapper } from "./styles"

function Homework_15() {
  const [count, setCount] = useState<number>(0)

  const onPlus = () => {
    setCount(prevValue => {
      return (prevValue += 1)
    })
  } 

  const onMinus = () => {
    setCount(prevValue => {
      return (prevValue -= 1)
    })
  }

  return (
    <VegiCountFormWrapper>
      <Input id="input" label="input" name="input" />
      <Button name="button" />
      <Counter count={count} onMinus={onMinus} onPlus={onPlus} onDivide={()=> {}} onMultiply={()=> {}}/>
    </VegiCountFormWrapper>
  )
}

export default Homework_15
