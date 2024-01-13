const Button =(props)=>{

    return(
        <button type={props.btnType} 
        className={props.type == 'primary'?
        'btn btn-primary m-1'
        :'btn btn-danger m-1'}
        onClick={props.action}
        >
            {props.title}
        </button>
    )

}

export default Button

