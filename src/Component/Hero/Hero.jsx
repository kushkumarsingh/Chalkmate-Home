import React from 'react';
import './Hero.css';

function Hero(){

  return (
    <div className='hero'>
        <div className="intro-section">
            <div className="social-links">
                <div className='facebook' style={{backgroundColor: '#E03A60'}}>
                    <img src="Assets/facebook.svg" alt="" />
                    <div>facebook</div>
                </div>
                <div className='linkedin' style={{backgroundColor: '#FFB94D'}}>
                    <img src="Assets/linkedin.svg" alt="" />
                    <div>linkedin</div>
                </div>
                <div className='twitter' style={{backgroundColor: '#758CFA'}}>
                    <img src="Assets/twitter.svg" alt="" />
                    <div>twitter</div>
                </div>
                <div className='instagram' style={{backgroundColor: '#C744F4'}}>
                    <img src="Assets/instagram.svg" alt="" />
                    <div>instagram</div>
                </div>
                <div className='medium' style={{backgroundColor: '#6C44F4'}}>
                    <img src="Assets/medium.svg" alt="" />
                    <div>medium</div>
                </div>
            </div>
            <video autoPlay loop muted>
                <source src='Assets/education.mp4'/>
            </video>
            <div className='intro'>
                <div className='heading'>
                    Learn Better Together
                </div>
                <div className='sub-heading'>
                    Manage your classroom. Engage your students.
                </div>
                <div className='button-group'>
                    <button className='signup'>Get Started</button>
                    {/* <div><button className='video'><img src="Assets/video.svg" alt="" /></button>Play Video</div> */}
                </div>
            </div>
        </div>

        <div className='card-section'>
            <div className='info-card'>
                <div className='info-number'>
                    1000
                </div>
                <div className='info-text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>
            </div>
            <div className='info-card'>
                <div className='info-number'>
                    1000
                </div>
                <div className='info-text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>
            </div>
            <div className='info-card'>
                <div className='info-number'>
                    1000
                </div>
                <div className='info-text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>
            </div>
        </div>

        <div className='section-area'>
            <section className="section">    
                    <div className="section-img">
                        <img src="Assets/portfolio.svg" alt="" />
                    </div>

                    <div className='section-text'>
                        <div className='section-heading' style={{color: '#00D498'}}>
                            Create Your <br></br>Career Portfolio
                        </div>
                        <div className='section-sub-heading'>
                            Send messages, share class materials, and make learning accessible anywhere. Save yourself time by bringing all your classroom tools together.
                        </div>
                        {/* <button className='button'>Know more</button> */}
                    </div>
            </section>

            <section className="section">    
                    <div className="section-img">
                        <img src="Assets/monetize-content.svg" alt="" />
                    </div>

                    <div className='section-text'>
                        <div className='section-heading' style={{color: '#4951EC'}}>
                            Monetize Your <br></br>Content
                        </div>
                        <div className='section-sub-heading'>
                            Send messages, share class materials, and make learning accessible anywhere. Save yourself time by bringing all your classroom tools together.
                        </div>
                        {/* <button className='button'>Know more</button> */}
                    </div>
            </section>

            <section className="section">    
                    <div className="section-img">
                        <img src="Assets/social.svg" alt="" />
                    </div>

                    <div className='section-text'>
                        <div className='section-heading' style={{color: '#FA7167'}}>
                            Social  <br></br>Engagement
                        </div>
                        <div className='section-sub-heading'>
                            Send messages, share class materials, and make learning accessible anywhere. Save yourself time by bringing all your classroom tools together.
                        </div>
                        {/* <button className='button'>Know more</button> */}
                    </div>
            </section>
            <div className='map-section'>
                <div className='section-heading' style={{color: '#4951EC'}}>Our Global Presence</div>
                <img className='map' src="Assets/map.png" alt="" />
            </div>
        </div>


        <div className='section-area '>
            <section className="section reverse">    
                    <div className='section-text'>
                        <div className='section-heading' style={{color: '#FA4067'}}>
                            Digital Content <br></br>Management
                        </div>
                        <div className='section-sub-heading'>
                            Send messages, share class materials, and make learning accessible anywhere. Save yourself time by bringing all your classroom tools together.
                        </div>
                        {/* <button className='button'>Know more</button> */}
                    </div>
                    <div className="section-img">
                        <img src="Assets/digital-content.svg" alt="" />
                    </div>

            </section>
            <section className="section reverse">    
                    <div className='section-text'>
                        <div className='section-heading' style={{color: '#00DFBF'}}>
                            Personalized and <br></br>Filtered Content
                        </div>
                        <div className='section-sub-heading'>
                            Send messages, share class materials, and make learning accessible anywhere. Save yourself time by bringing all your classroom tools together.
                        </div>
                        {/* <button className='button'>Know more</button> */}
                    </div>
                    <div className="section-img">
                        <img src="Assets/personalize.svg" alt="" />
                    </div>
            </section>
        </div>

        {/* <Slider>

        </Slider> */}

        <div className="topic-intrest">
            <div className="intrests">
                <div className='section-heading'>The Topics of Interest</div>
                <div className='topic-list'>
                    <div>Foundational Math</div>
                    <div>Software Development</div>
                    <div>Science</div>
                    <div>Foundational Logic</div>
                    <div>High School </div>
                    <div>Math Engineering</div>
                    <div>View all</div>
                </div>

                <div className='card-container'>
                    <div className="topic-card">
                        <img src="Assets/topic1.png" alt="" />
                        <div className='card-text'>
                            <div className='title'>Introduction to Quantum Theory & Astrophysics</div>
                            <div className='level'>Advance</div>
                            <div className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</div>
                            <div className='learn-more'>Learn More</div>
                        </div>
                    </div>

                    <div className="topic-card">
                        <img src="Assets/topic2.png" alt="" />
                        <div className='card-text'>
                            <div className='title'>Introduction to Quantum Theory & Astrophysics</div>
                            <div className='level'>Advance</div>
                            <div className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</div>
                            <div className='learn-more'>Learn More</div>
                        </div>
                    </div>

                    <div className="topic-card">
                        <img src="Assets/topic3.png" alt="" />
                        <div className='card-text'>
                            <div className='title'>Introduction to Quantum Theory & Astrophysics</div>
                            <div className='level'>Advance</div>
                            <div className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</div>
                            <div className='learn-more'>Learn More</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='setup-section'>
            <div className='setup-heading'>Set up 
                an account
                and start learning.
            </div>
            <input className='email' type="email" placeholder="Your email here..." />
            <button className='button'>Set me up</button>
        </div>

        <div className="footer">
            <div className="footer-logo">

            </div>
            <div className="footer-discrption">

            </div>
            <div className="footer-discrption">
                
            </div>
        </div>

        <div className="footer">
            <div className='footer-left'>
                <img src="Assets/logo-white.svg" alt="" />
                <p>
                    Calkmate is a global education network that helps connect all learners with people and resources needed to reach their full potential.
                </p>
                <div className='footer-social'>
                    <img src="Assets/facebook.svg" alt="" />
                    <img src="Assets/linkedin.svg" alt="" />
                    <img src="Assets/twitter.svg" alt="" />
                    <img src="Assets/instagram.svg" alt="" />
                    <img src="Assets/medium.svg" alt="" />
                </div>
            </div>
            <div className='footer-right'>
                <div>Work</div>
                <div>About</div>
                <div>Services</div>
            </div>
        </div>

    </div>
  );
}

export default Hero;