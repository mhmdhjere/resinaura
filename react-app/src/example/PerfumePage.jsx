import './PerfumePage.css';
import bottleImage from './assets/romantic-dawn.jpg'; // replace with your image

export default function PerfumePage() {
  return (
    <div className="perfume-page">
      <img src={bottleImage} alt="Romantic Dawn Perfume" className="perfume-image" />

      <div className="perfume-text">
        <h1 className="perfume-title">Romantic <br /> <span>Dawn</span></h1>

        <div className="perfume-info">
          <span>MENU</span>
          <span>100 ml</span>
          <span>BUY 399$</span>
        </div>

        <p className="perfume-description">
          "Romantic Dawn" is a scent that will transport you to a world of romantic feelings and the beauty of nature.
          The combination of fresh and delicate lilac with warm and sweet peony creates a bright and memorable fragrance.
          It is suitable for any time of the year and for any occasion – from meeting with friends to a romantic date.
        </p>
      </div>
    </div>
  );
}
