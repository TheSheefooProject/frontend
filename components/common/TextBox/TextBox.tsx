import styles from './textbox.module.scss'

const TextBox = (props: {
  [x: string]: any
  text?: string
  className?: string
  placeholder?: string
  name: string
  type: string
  required?: boolean
  onChange?: any | (() => {})
  onKeyUp?: any | (() => {})
}) => {
  // Default prop values
  const {
    placeholder = '',
    className = '',
    type = 'text',
    text = '',
    name = '',
    onChange = () => {},
    onKeyUp = () => {},
    required = false,
    ...restProps
  } = props

  return (
    <input
      className={
        `${'placeholder:text-text_3 rounded-sm bg-back_4 py-1 px-3 text-text_1 focus:outline-none focus:ring focus:ring-back_2'} ` +
        className
      }
      defaultValue={text}
      placeholder={placeholder}
      name={name}
      required={required}
      type={type}
      onChange={onChange}
      onKeyUp={onKeyUp}
      value={text}
    ></input>
  )
}

export default TextBox
