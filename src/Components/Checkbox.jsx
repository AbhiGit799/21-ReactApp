import React from "react";

export default function Checkbox(props) {
  return (
    <div className="form-group">
      <label className="form-label">{props.title}</label>

      <div className="checkbox">
        {
            props.options.map(op=>{
                return(
                    <label key={op} className="checkbox-inline">
                      <input 
                      type="checkbox"
                      name={props.name}
                      value={op}
                      onChange={props.action}
                      checked={props.selectedOptions.indexOf(op)>-1}
                      />
                      {op}
                    </label>
                )
            })
        }
      </div>


    </div>
  );
}



