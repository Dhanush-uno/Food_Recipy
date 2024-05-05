import React, { useContext, useState, useEffect } from 'react';
import './Main.css';
import { assets } from '../assets/assets';
import { Context } from '../context/Context';
import Cookies from 'js-cookie';

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
};

const Main = ({ title, calories, ingredients }) => {
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);
  const [userData, setUserData] = useState({});
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  useEffect(() => {
    fetchUserProfile();
    // Call onSent when the component mounts
    onSent(`Generate recipe of ${title}`);
  }, []); // Empty dependency array to trigger only on mount

  const fetchUserProfile = async () => {
    try {
      setApiStatus(apiStatusConstants.inProgress);
      const jwtToken = Cookies.get('jwt_token');
      const apiUrl = 'https://jmbackend.onrender.com/profile/';
      const options = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        method: 'GET',
      };
      const response = await fetch(apiUrl, options);
      const data = await response.json();
      if (response.ok) {
        setUserData(data);
        setApiStatus(apiStatusConstants.success);
      } else {
        setApiStatus(apiStatusConstants.failure);
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
      setApiStatus(apiStatusConstants.failure);
    }
  };

  return (
    <div className='main'>
      <div className="nav">
        <p className='spell-title'>Mom's Reci</p>
        <img src="https://static.vecteezy.com/system/resources/previews/023/841/800/original/adorable-blue-bots-small-cute-robots-generated-by-ai-free-png.png" alt="user-image" />
      </div>
      <div className="main-container">
        {showResult ? (
          <div className="result">
            <div className='result-title'>
              <img src="https://e7.pngegg.com/pngimages/81/570/png-clipart-profile-logo-computer-icons-user-user-blue-heroes-thumbnail.png" alt="user" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src="https://static.vecteezy.com/system/resources/previews/023/841/800/original/adorable-blue-bots-small-cute-robots-generated-by-ai-free-png.png" alt="robot" />
              {loading ? (
                <div className="loader">
                  <hr className="animated-bg" />
                  <hr className="animated-bg" />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        ) : (
          <>
            {userData && (
              <div className="greet">
                <p><span>Hello, {userData.name}</span></p>
                <p>I may give whatever you want....</p>
              </div>
            )}
            <div className="search-box">
              <input onChange={(e) => setInput(e.target.value)} value={`Generate recipe of ${title}`} type="text" placeholder={`Generate recipe of ${title}`} />
              <div>
                <img src={assets.gallery_icon} width={30} alt="" />
                <img src={assets.mic_icon} width={30} alt="" />
                {input ? <img onClick={() => onSent()} src={assets.send_icon} width={30} alt="" /> : null}
              </div>
            </div>
          </>
        )}
        
      </div>
    </div>
  );
};

export default Main;
