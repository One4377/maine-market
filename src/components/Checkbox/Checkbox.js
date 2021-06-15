import "./Checkbox.scss"

export default function Checkbox({ value, label, onChange }) {
  return (
    <label className="Checkbox" onChange={() => onChange(!value)}>
      <input type="checkbox" checked={value} onChange={() => null} />
      <span className="checkmark"></span>
      {label}
    </label>
  )
}
