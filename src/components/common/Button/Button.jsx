import "./Button.css"
const Button = ({text, icon }) => {
  return (
    <div>
      <button className="btn">{icon}{text}</button>
    </div>
  )
}

export default Button

