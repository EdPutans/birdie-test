import React from 'react'
import Header from '../Header';
import './style.css'
type Props = {
  title: string;
  children: React.ReactNode
}

function Section({ title, children }: Props) {
  return (
    <div className='section_container'>
      <Header text={title} />
      {children}
    </div>
  )
}

export default React.memo(Section);