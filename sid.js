import { useState, useRef, useEffect } from "react";
import "@/App.css";

function App() {
  const [showCelebration, setShowCelebration] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: '60%', left: '60%' });
  const [yesButtonSize, setYesButtonSize] = useState(1);
  const noButtonRef = useRef(null);

  const handleYesClick = () => {
    setShowCelebration(true);
  };

  const handleNoButtonMouseEnter = (e) => {
    // Generate random position within safe bounds
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 100;
    const randomX = Math.random() * Math.max(100, maxX - 100) + 50;
    const randomY = Math.random() * Math.max(100, maxY - 100) + 50;

    setNoButtonPosition({
      top: `${randomY}px`,
      left: `${randomX}px`
    });

    // Increase Yes button size slightly each time No is avoided
    setYesButtonSize(prev => Math.min(prev + 0.1, 2));
  };

  useEffect(() => {
    // Add heart explosions periodically
    if (showCelebration) {
      const interval = setInterval(() => {
        createHeartExplosion();
      }, 200);

      return () => clearInterval(interval);
    }
  }, [showCelebration]);

  const createHeartExplosion = () => {
    const heart = document.createElement('div');
    heart.className = 'celebration-heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDelay = Math.random() * 0.5 + 's';
    document.getElementById('celebration-container')?.appendChild(heart);
    
    setTimeout(() => heart.remove(), 3000);
  };

  return (
    <div className="App">
      {/* Floating hearts background */}
      <div className="floating-hearts-container">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="floating-heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            💕
          </div>
        ))}
      </div>

      {!showCelebration ? (
        <div className="valentine-container">
          {/* Animated Teddy Bear */}
          <div className="teddy-bear">
            🧸
          </div>

          {/* Main Question */}
          <div className="question-container">
            <h1 className="valentine-title" data-testid="valentine-title">
              Yashika,
            </h1>
            <h2 className="valentine-subtitle" data-testid="valentine-subtitle">
              Will you be my Valentine?
            </h2>
          </div>

          {/* Buttons */}
          <div className="buttons-container">
            <button 
              className="yes-button"
              data-testid="yes-button"
              onClick={handleYesClick}
              style={{ transform: `scale(${yesButtonSize})` }}
            >
              Yes! 💖
            </button>
            
            <button 
              ref={noButtonRef}
              className="no-button"
              data-testid="no-button"
              onMouseEnter={handleNoButtonMouseEnter}
              style={{
                position: 'fixed',
                top: noButtonPosition.top,
                left: noButtonPosition.left
              }}
            >
              No
            </button>
          </div>

          {/* Decorative hearts */}
          <div className="decorative-hearts">
            <span className="deco-heart">💗</span>
            <span className="deco-heart">💝</span>
            <span className="deco-heart">💖</span>
          </div>
        </div>
      ) : (
        <div className="celebration-screen" data-testid="celebration-screen">
          <div id="celebration-container" className="celebration-container"></div>
          
          {/* Animated fireworks/sparkles background */}
          <div className="fireworks-container">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="firework"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              >
                ✨
              </div>
            ))}
          </div>

          {/* Floating balloons */}
          <div className="balloons-container">
            <div className="balloon balloon-1">🎈</div>
            <div className="balloon balloon-2">🎈</div>
            <div className="balloon balloon-3">🎈</div>
            <div className="balloon balloon-4">🎈</div>
          </div>
          
          <div className="celebration-content">
            <div className="celebration-teddy">
              🧸
            </div>
            
            <h1 className="celebration-title" data-testid="celebration-title">
              Yay! 🎉
            </h1>
            
            <div className="celebration-subtitle">
              She said YES!
            </div>
            
            <p className="celebration-message" data-testid="celebration-message">
              I knew you'd say yes! ❤️
            </p>
            
            <div className="romantic-message">
              You make my heart skip a beat! 💓
            </div>
            
            <div className="celebration-hearts">
              💕 💗 💖 💝 💓
            </div>
            
            <div className="love-quote">
              Thank you for being in my life
            </div>
            
            <div className="sparkles">
              ✨ ⭐ 🌟 ⭐ ✨
            </div>
            
            <div className="confetti-text">
              Best Valentine Ever! 🎊
            </div>
            
            {/* Animated roses */}
            <div className="roses-container">
              <span className="rose">🌹</span>
              <span className="rose">🌹</span>
              <span className="rose">🌹</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;


