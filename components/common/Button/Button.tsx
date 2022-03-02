import styles from './button.module.scss'

const Button = (props: {
  [x: string]: any
  text?: 'Default Button' | undefined
}) => {
  // Default prop values
  const { text = 'Default Button', ...restProps } = props

  return (
    <button onClick={() => console.log('I was clicked 💀')}>Click Me</button>
  )
}

export default Button
