import "./Button.scss"
import cx from "classnames"

export default function Button({ variant = "primary", className, children, ...props }) {
  return (
    <button {...props} className={cx("Button", variant, className)}>
      {children}
    </button>
  )
}
