import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactFullpage from '@fullpage/react-fullpage';
import './Landing.scss';
import Container from '../../components/Container/Container';
// import variables from '../../sass/_variables.scss';
// import cognitoUtils from '../../utils/CognitoUtils';
// import * as actions from '../../store/actions';
import Showcase from '../../components/Showcase/Showcase';
import Navbar from '../../components/Navbar/Navbar';
import img1 from '../../assets/images/showcase_link_shortener.png';
import img2 from '../../assets/images/showcase_share_link.png';
import img3 from '../../assets/images/showcase_online.png';
import URLDetails from './URLDetails/URLDetails';
import { useDispatch } from 'react-redux';
import { shortenUrl } from '../../store/actions';

const links = [{ title: 'I am a business', pathName: '/signin', isButton: true }];

const propTypes = {
  loadingData: PropTypes.bool.isRequired,
};

const Landing = (props) => {
  const { loadingData } = props;

  const [ originalUrl, setOriginalUrl ] = useState("");
  const [ key, setKey ] = useState("");

  const dispatch = useDispatch();

  if (loadingData) {
    return null;
  }

  const handleShorten = () => {
    setOriginalUrl("");
    setKey("");
    dispatch(shortenUrl(originalUrl, key));
  }

  return (
    <div className="landing">
      <Container>
        <Navbar links={links} />
        <div className="section">
          <Showcase title="Shorten Any Links" image={img2} >
            <p className="description">
              Build and protect your links using powerful and
              <div className="empty-line" />
              recognizible short links.
              <span className="text-shortify-color"> It is free forever.</span>
            </p>
            <div className="input-area">
              <URLDetails />
              <div className="input-couple">
                <div class="form-group">
                    <span>https://ishortify.tk/</span>
                    <input class="form-field" value={key} onChange={(e) => {setKey(e.target.value)}} type="text" placeholder="optional" />
                </div>
              </div>
              <div className="input-couple">
                <input type="text" value={originalUrl} onChange={(e) => {setOriginalUrl(e.target.value)}} placeholder="Type or Paste your link"/>
                <button className="large-btn" onClick={handleShorten}>Shorten</button>
              </div>
            </div>
          </Showcase>
        </div>
      </Container>
    </div>
  );
};


Landing.propTypes = propTypes;
export default Landing;
