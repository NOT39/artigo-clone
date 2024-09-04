import { useState } from 'react'

type AlphaProps = {
  alpha: string
  visible?: boolean
}

export function Alpha({ alpha, visible }: AlphaProps) {
  const [lengthVisible, setLengthVisible] = useState(false)

  return visible ? (
    <span>{alpha}</span>
  ) : (
    <span
      data-length={alpha.length}
      className={`${
        lengthVisible &&
        'relative text-inherit after:absolute after:left-0 after:font-bold after:text-zinc-700 after:content-[attr(data-length)]'
      } cursor-pointer`}
      onClick={() => setLengthVisible((prevValue) => !prevValue)}
    >
      {!visible ? '█'.repeat(alpha.length) : alpha}
    </span>
  )
}
