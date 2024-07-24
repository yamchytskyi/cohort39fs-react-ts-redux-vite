import Counter from "components/Counter/Counter"
import Button from "components/Button/Button"
import Input from "components/Input/Input"

function Homework_15() {
  return (
    <div>
      <Input id="input" label="input" name="input" />
      <Button name="button" />
      <Counter count={0} onMinus={() => {}} onPlus={() => {}} />
    </div>
  )
}

export default Homework_15
