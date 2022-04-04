import styles from './textbox.module.scss'

const TextBox = (props: {
  [x: string]: any
  text?: string
  className?: string
  placeholder?: string
}) => {
  // Default prop values
  const { placeholder = '', className = '', text = '', ...restProps } = props

  return (
    <input
      className={
        `${'rounded-sm bg-back_4 py-1 px-3 text-text_1 placeholder:text-text_1 focus:outline-none focus:ring focus:ring-back_2'} ` +
        className
      }
      defaultValue={text}
      placeholder={placeholder}
      type="text"
    ></input>
  )
}

export default TextBox
