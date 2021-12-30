
const Input = props => {
    const { type, name, placeholder, onChange, autoFocus, label, value } = props;
    return <div className="input-field">
        <label>{label}</label>
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            autoFocus={autoFocus}
            onChange={onChange} />
    </div>
}

export default Input;