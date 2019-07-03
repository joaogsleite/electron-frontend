import React, { memo } from 'react'

import style from './style.module.scss'

function Input({ name, value, onChange }) {

  const handleChange = (e) => onChange(e.target.value, name)

  return (
    <input
      className={style.input}
      name={name}
      value={value}
      onChange={handleChange}
    />
  )
}

export default memo(Input)
