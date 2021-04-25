import React from 'react';
import { useSelector } from 'react-redux';
import Lottie from 'react-lottie';
import loadingAnimation from '../../assets/lottie/lottie_loader.json';
import './Loading.scss';

const Loading = () => {
  const loading = useSelector((state) => state.layout.loading);
  let content = null;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
  };

  if (loading) {
    content = (
      <div className="full-dim">
        <div className="lottie-box">
          <div className="lottie-container">
            <Lottie
              options={defaultOptions}
              height={128}
              width={128}
              speed={4}
              isStopped={false}
              isPaused={false}
            />
          </div>
        </div>
      </div>
    );
  }

  return content;
};

export default Loading;
