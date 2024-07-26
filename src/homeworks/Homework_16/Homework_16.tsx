import { useDispatch } from "react-redux"

import Feedback from "components/Feedback/Feedback"
import { useAppSelector } from "store/hooks"
import {
  feedbackSliceActions,
  feedbackSliceSelectors,
} from "store/redux/feedback/feedbackSlice"

import { PageWrapper } from "./styles"

function Homework_16() {
  const dispatch = useDispatch()
  const likes = useAppSelector(feedbackSliceSelectors.likes)
  const dislikes = useAppSelector(feedbackSliceSelectors.dislikes)

  const onLike = () => {
    dispatch(feedbackSliceActions.onLike())
  }

  const onDislike = () => {
    dispatch(feedbackSliceActions.onDislike())
  }

  const resetResults = () => {
    dispatch(feedbackSliceActions.resetResults())
  }

  return (
    <PageWrapper>
      <Feedback
        like={likes}
        dislike={dislikes}
        onDislike={onDislike}
        onLike={onLike}
        resetResults={resetResults}
      />
    </PageWrapper>
  )
}

export default Homework_16
