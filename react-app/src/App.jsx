import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';
import img5 from '../images/e152c0f7-50ef-41e7-a303-4c6bfcb45468.jpg';
import img6 from '../images/e3179c3e-450d-4edc-b7a3-ed40b05cd87d.jpg';
import img7 from '../images/334e7e66-d3a8-407d-8138-ed4b69765e33.jpg';
import img8 from '../images/0ae9402c-3d27-4367-9284-1adb1c2d6e99.jpg';
import img9 from '../images/64c5dfde-048f-4c4d-b413-d7530f47809a.jpg';
import img10 from '../images/89058c51-c435-4bdb-8b39-cb4902a69f0c.jpg';
import img11 from '../images/IMG-20250713-WA0023.jpg';
import img12 from '../images/IMG-20250713-WA0022.jpg';
import img13 from '../images/IMG-20250713-WA0021.jpg';
import img14 from '../images/IMG-20250713-WA0020.jpg';
import img15 from '../images/IMG-20250713-WA0018.jpg';
import img16 from '../images/IMG-20250713-WA0017.jpg';
import img17 from '../images/IMG-20250713-WA0016.jpg';
import img18 from '../images/IMG-20250713-WA0015.jpg';
import background from '../images/background.jpg';
import './example/PerfumePage.css';

const products = [
  {
    id: 'romantic-dawn',
    name: 'Romantic Dawn',
    images: [img1, img2, img3, img4, img5, img6],
    info: 'MENU | 100 ml | BUY 399$',
    desc: '"Romantic Dawn" is a scent that will transport you to a world of romantic feelings and the beauty of nature. The combination of fresh and delicate lilac with warm and sweet peony creates a bright and memorable fragrance. It is suitable for any time of the year and for any occasion - from meeting with friends to a romantic date.'
  },
  {
    id: 'morning-dew',
    name: 'Morning Dew',
    images: [img7, img8, img9, img10, img11],
    info: 'MENU | 100 ml | BUY 399$',
    desc: 'A fresh and invigorating scent that captures the essence of a dewy morning in a blooming garden. Notes of green leaves and white flowers.'
  },
  {
    id: 'mystical-peony',
    name: 'Mystical Peony',
    images: [img12, img13, img14, img15],
    info: 'MENU | 100 ml | BUY 399$',
    desc: 'A mysterious and enchanting fragrance with lush peony, soft musk, and a hint of wild berries. Perfect for special evenings.'
  },
  {
    id: 'vanilla-orchid',
    name: 'Vanilla Orchid',
    images: [img16, img17, img18, img1, img2],
    info: 'MENU | 100 ml | BUY 399$',
    desc: 'A warm, comforting blend of vanilla and orchid, with subtle hints of caramel and sandalwood. Sweet and sophisticated.'
  },
  {
    id: 'amber-night',
    name: 'Amber Night',
    images: [img3, img4, img5, img6, img7, img8],
    info: 'MENU | 100 ml | BUY 399$',
    desc: 'Deep amber, patchouli, and a touch of spice create a bold, sensual scent for unforgettable nights.'
  },
  {
    id: 'citrus-dream',
    name: 'Citrus Dream',
    images: [img9, img10, img11, img12, img13, img14],
    info: 'MENU | 100 ml | BUY 399$',
    desc: 'A lively, sparkling fragrance with notes of citrus zest, neroli, and a hint of jasmine. Uplifting and bright.'
  },
];

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);
  const [current, setCurrent] = React.useState(0);
  const [previewOpen, setPreviewOpen] = React.useState(false);
  const startX = React.useRef(null);
  if (!product) return <div style={{ color: '#fff', textAlign: 'center', marginTop: '3rem' }}>Product not found</div>;
  const [first, ...rest] = product.name.split(' ');

  React.useEffect(() => {
    if (!previewOpen) return;
    function onKey(e) { if (e.key === 'Escape') setPreviewOpen(false); }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [previewOpen]);

  // Swipe handlers
  function handleTouchStart(e) {
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
  }
  function handleTouchEnd(e) {
    if (startX.current === null) return;
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const diff = endX - startX.current;
    if (Math.abs(diff) > 50) {
      if (diff < 0 && current < product.images.length - 1) setCurrent(current + 1);
      if (diff > 0 && current > 0) setCurrent(current - 1);
    }
    startX.current = null;
  }

  return (
    <div className="perfume-page">
      <div className="perfume-image-container">
        <img
          src={product.images[current]}
          alt={product.name}
          className="perfume-image"
          onClick={() => setPreviewOpen(true)}
          style={{ cursor: 'zoom-in' }}
        />
        <div className="carousel-dots">
          {product.images.map((_, idx) => (
            <span
              key={idx}
              className={`carousel-dot${idx === current ? ' active' : ''}`}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
      </div>
      <div className="perfume-text">
        <h1 className="perfume-title">
          {first} <br /> <span>{rest.join(' ')}</span>
        </h1>
        <div className="perfume-info">
          <span>MENU</span>
          <span>100 ml</span>
          <span>BUY 399$</span>
        </div>
        <p className="perfume-description">{product.desc}</p>
        <button className="product-detail-back" onClick={() => navigate(-1)} style={{marginTop:'1.5rem'}}>Back</button>
      </div>
      {previewOpen && (
        <div
          className="image-preview-overlay"
          onClick={() => setPreviewOpen(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleTouchStart}
          onMouseUp={handleTouchEnd}
        >
          <img
            src={product.images[current]}
            alt={product.name}
            className="image-preview-full"
            onClick={e => e.stopPropagation()}
          />
          <button className="image-preview-close" onClick={() => setPreviewOpen(false)}>&times;</button>
        </div>
      )}
    </div>
  );
}

function Home() {
  const navigate = useNavigate();
  React.useEffect(() => {
    document.body.style.background = '';
    document.body.style.backgroundImage = `url(${background})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundAttachment = 'fixed';
    return () => {
      document.body.style.background = '';
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundPosition = '';
      document.body.style.backgroundAttachment = '';
    };
  }, []);
  return (
    <>
      <Header />
      <main className="perfume-zigzag-list">
        {products.map((p, i) => (
          <div
            className={`perfume-zigzag-row${i % 2 === 1 ? ' reverse' : ''}`}
            key={p.id}
            onClick={() => navigate(`/product/${p.id}`)}
            style={{ cursor: 'pointer' }}
          >
            <div className="perfume-zigzag-title">{p.name}</div>
            <img src={p.images[0]} alt={p.name} className="perfume-zigzag-img" />
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;
