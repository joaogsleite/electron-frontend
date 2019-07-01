import React, { memo } from 'react'

function Title({ children }) {
  return (
    <h2>{children}</h2>
  )
}

export default memo(Title)
