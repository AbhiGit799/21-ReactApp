import React from 'react'

export default function Textarea(props) {
  return (
    <div className='form-group'>

        <label className='form-label'>{props.title}</label>

        <textarea className='form-control'
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.action}
        rows={props.rows}
        col={props.cols}
        />
      
    </div>
  )
}