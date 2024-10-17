import Button from "../Button/Button";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-wrapper">
      <div className="heading-wrapper">
        <h1>Order Products Faster Easier</h1>
        <p>
          The food at your doorstep. Why starve when you have us. You hunger
          partner. Straight out of the oven to your doorstep.
        </p>
        <div className="location-wrapper">
          <div className="input-wrapper">
            <Button text="Get Started" />
          </div>
        </div>
      </div>
      <div className="image-wrapper">
        <div className="bg-box">
          <img src="/assets/img/heroImg.svg" alt="img.." />
        </div>
      </div>
    </div>
  );
};

export default Banner;
