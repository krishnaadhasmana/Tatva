import React from 'react';
import './product.css';

interface Features17Props {
    feature1Title?: string;
    feature1Slogan?: string;
    feature1ImageSrc?: string;
    feature1ImageAlt?: string;
    feature1Description?: string;
  }
  
  const Features17: React.FC<Features17Props> = (props) => {
    return (
      <div className="features17-layout349 thq-section-padding">
        <div className="features17-max-width thq-section-max-width">
          <div className="features17-image-container">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="thq-img-ratio-16-9 rounded-xl"
            />
          </div>
          <div className="features17-content">
            <div className="features17-section-title">
              <span className="thq-body-small text-gray-500">{props.feature1Slogan}</span>
              <div className="features17-content1">
                <h2 className="thq-heading-2 tracking-tighter">{props.feature1Title}</h2>
                <p className="thq-body-large">{props.feature1Description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  
    );
  }
  
  Features17.defaultProps = {
    feature1Title: 'Empowering our sources',
    feature1Slogan: 'One man\'s trash...',
    feature1ImageSrc: './img1.jpeg',
    feature1ImageAlt: 'Sustainable Waste Management Image',
    feature1Description: 'We source unsold and mildly blemished produce from local mandis, compensating sellers with a fair and appropriate amount for every kilogram of produce collected. This not only supports the sellers but also helps in reducing waste.',
  };
  
  export default Features17;
  
  