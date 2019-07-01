import React, { memo } from 'react'

import style from './style.module.scss'

function Title({ children }) {
  return (
    <h2 className={style.title}>{children}</h2>
  )
}

export default memo(Title)
