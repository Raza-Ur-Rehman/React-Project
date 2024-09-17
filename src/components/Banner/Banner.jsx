import Button from "../common/Button/Button";
import DownloadButton from "../common/DownloadButton/DownloadButton";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-wrapper">
      <div className="heading-wrapper">
        <h1>Your Favorite Food Delivery Partner</h1>
        <p>
          The food at your doorstep. Why starve when you have us. You hunger
          partner. Straight out of the oven to your doorstep.
        </p>
        <div className="location-wrapper">
          <div className="input-wrapper">
            <input type="text" placeholder="Enter your delivery location "/>
            <Button/>
          </div>
          <DownloadButton/>
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
