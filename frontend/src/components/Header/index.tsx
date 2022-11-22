import React from 'react'

type Props = { text: string }

function Header({ text }: Props) {
  return (
    <h2>{text}</h2>
  )
}

export default React.memo(Header);