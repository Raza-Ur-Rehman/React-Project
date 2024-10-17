import Button from "../common/Button/Button";
import './Header.css'

const Header = () => {
  return (
  <div className="header-wrapper">
    <div className="logo">
      <h1>Delivery.</h1>
    </div>
    <div className="navbar">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Restaurant</a>
        </li>
        <li>
          <a href="#">Recipes</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Page</a>
        </li>
      </ul>
    </div>
    <div className="btn_wrapper">
      <span>Login</span>
      <Button text="Order now!" />

    </div>
  </div>
)};

export default Header;
