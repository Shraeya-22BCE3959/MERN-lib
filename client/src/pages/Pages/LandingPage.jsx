import React, { useState, useEffect } from "react";
import "../Assets/css/landing.css";

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="land-top" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#d3d3d3' }}>
      <div className="land-banner-slogan">
        <div className="land-banner-slogan-inner" style={{ textAlign: 'center' }}>
          <div className="land-logo">Library Management System
          </div>
          <div className="land-button">
            <a className="landing-button-hover" href="/home">
              <span>START!!</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
