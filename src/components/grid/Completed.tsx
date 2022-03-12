import {CompletedRow} from './CompletedRow'

type Props = {
  completed: string[]
}

export const Completed = ({
  completed,
}: Props) => {

  return (
    <>
      {completed.map((solution, i) => (
        <CompletedRow
          key={i}
          solution={solution}
          guess={solution}
          isRevealing={false}
        />
      ))}
    </>
  )
}
