import React from 'react'

export default function Input(props) {
  return (
    <div className='form-group'>

        <label className='form-label'>{props.title}</label>

        <input className='form-control'
        name={props.name}
        type={props.inputType}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.action}
        />
      
    </div>
  )
}





