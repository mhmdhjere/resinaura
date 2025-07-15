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
import background from '../images/background.jpg';
import './example/PerfumePage.css';

const products = [
  {
    id: 'romantic-dawn',
    name: 'Romantic Dawn',
    img: img1,
    info: 'MENU | 100 ml | BUY 399$',
    desc: '"Romantic Dawn" is a scent that will transport you to a world of romantic feelings and the beauty of nature. The combination of fresh and delicate lilac with warm and sweet peony creates a bright and memorable fragrance. It is suitable for any time of the year and for any occasion - from meeting with friends to a romantic date.'
  },
  {
    id: 'morning-dew',
    name: 'Morning Dew',
    img: img2,
    info: 'MENU | 100 ml | BUY 399$',
    desc: 'A fresh and invigorating scent that captures the essence of a dewy morning in a blooming garden. Notes of green leaves and white flowers.'
  },
  {
    id: 'mystical-peony',
    name: 'Mystical Peony',
    img: img3,
    info: 'MENU | 100 ml | BUY 399$',
    desc: 'A mysterious and enchanting fragrance with lush peony, soft musk, and a hint of wild berries. Perfect for special evenings.'
  },
  {
    id: 'vanilla-orchid',
    name: 'Vanilla Orchid',
    img: img4,
    info: 'MENU | 100 ml | BUY 399$',
    desc: 'A warm, comforting blend of vanilla and orchid, with subtle hints of caramel and sandalwood. Sweet and sophisticated.'
  },
  {
    id: 'amber-night',
    name: 'Amber Night',
    img: img5,
    info: 'MENU | 100 ml | BUY 399$',
    desc: 'Deep amber, patchouli, and a touch of spice create a bold, sensual scent for unforgettable nights.'
  },
  {
    id: 'citrus-dream',
    name: 'Citrus Dream',
    img: img6,
    info: 'MENU | 100 ml | BUY 399$',
    desc: 'A lively, sparkling fragrance with notes of citrus zest, neroli, and a hint of jasmine. Uplifting and bright.'
  },
];

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);
  if (!product) return <div style={{ color: '#fff', textAlign: 'center', marginTop: '3rem' }}>Product not found</div>;
  const [first, ...rest] = product.name.split(' ');
  return (
    <div className="perfume-page">
      <img src={product.img} alt={product.name} className="perfume-image" />
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
            <img src={p.img} alt={p.name} className="perfume-zigzag-img" />
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
