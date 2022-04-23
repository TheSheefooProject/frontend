import styles from './textbox.module.scss'

const TextBox = (props: {
  [x: string]: any
  text?: string
  className?: string
  placeholder?: string
  name: string
  required?: boolean
}) => {
  // Default prop values
  const {
    placeholder = '',
    className = '',
    text = '',
    name = '',
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
      type="text"
    ></input>
  )
}

export default TextBox
