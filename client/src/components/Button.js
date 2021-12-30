const Button = props => {
    const { design, disabled ,onClick } = props;
    return <button
        className={`btn btn-${design}`}
        disabled={disabled}
        onClick={onClick}>
        {props.children}
    </button>
}

export default Button;