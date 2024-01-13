export default function Select(props) {
  return (
      <div className="form-group" >
          <label className="form-label" >{props.title}</label>
          <select
              className="form-control"
              name={props.name}
              value={props.value}
              onChange={props.action}
          >
              <option value="" disabled >{props.placeholder}</option>
              {
                  props.options.map(op => {
                      return <option key={op}>{op}</option>
                  })
              }
          </select>
      </div>
  )
}

