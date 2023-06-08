import React from 'react';
import Detect from './Detect';
import react from './logoicons/react.png';
import tf from './logoicons/tf.png';
import keras from './logoicons/keras.png';
import colab from './logoicons/colab.png';

const Landing = () => {
    return (
        <div className="App">
        <div id="overlayer"></div>
  
        <div className="loader">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>

        <div className="site-wrap">
        <div className="site-mobile-menu site-navbar-target">
            <div className="site-mobile-menu-header">
              <div className="site-mobile-menu-close mt-3">
                <span className="icon-close2 js-menu-toggle"></span>
              </div>
            </div>
            <div className="site-mobile-menu-body"></div>
          </div>
          
          <header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">
            
            <div className="container-fluid">
              <div className="d-flex align-items-center">
                <div className="site-logo"><img src={process.env.PUBLIC_URL +"/imgs/Logo.png"} alt="WildEye-Logo" height="50" width="50"/></div>
                <h5>&nbsp;WildEye</h5>
                <div>
                  <nav className="site-navigation position-relative text-right" role="navigation">
                    <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-xl-block">
                      <li><a href="#home-section" className="nav-link">Home</a></li>
                      <li><a href="#features-section" className="nav-link">Features</a></li>
                    </ul>
                  </nav>
                </div>
                
                <div className="ml-auto">
                  <nav className="site-navigation position-relative text-right" role="navigation">
                    <ul className="site-menu main-menu site-menu-dark js-clone-nav mr-auto d-none d-xl-block">
                    <li><a href="#glance-section" className="nav-link">Glance</a></li>
                      <li><a href="#demo-section" className="btn btn-outline-black py-3 px-5">Try Now</a></li>
                    </ul>
                  </nav>
                  <a href="/#" className="d-inline-block d-xl-none site-menu-toggle js-menu-toggle float-right"><span className="icon-menu h3"></span></a>
                </div>
              
              </div>
            </div>
            
          </header>
          <div className="intro-section custom-owl-carousel" id="home-section">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5 mr-auto" data-aos="fade-up">
                  <div className="owl-carousel slide-one-item-alt-text">
                    
                    <div className="slide-text">
                      <h1>WildEye</h1>
                      <p className="mb-5">WildEye is a system that utilizes the YOLOv8n (You Only Look Once) algorithm for object detection to protect and safeguard wildlife. YOLO is a real-time object detection algorithm that can quickly and accurately detect objects of interest in images or video frames.</p>
                      <p><a href="#demo-section" className="btn btn-outline-light py-3 px-5 smoothscroll">Try Now</a></p>
                    </div>
                    
                    <div className="slide-text">
                      <h1>YOLO?</h1>
                      <p className="mb-5">YOLO stands for You Only Look Once and these series of models are thus named because of their ability to predict every object present in an image with one forward pass.<br/>The main distinction introduced by the YOLO models was the framing of the task at hand. YOLO reframed the object detection task as a regression problem (predict the bounding box coordinates) instead of classification. </p>
                    </div>

                    <div className="slide-text">
                      <h1>YOLOv8?</h1>
                      <p className="mb-5">YOLOv8 is the latest version of the YOLO algorithm, which outperforms previous versions by introducing various modifications such as spatial attention, feature fusion, and context aggregation modules.<br/>These improvements result in faster and more accurate object detection, making YOLOv8 one of the key object detection algorithms in the field.</p>
                    </div>

                    <div className="slide-text">
                      <h1>YOLOv8 Nano?</h1>
                      <p className="mb-5">YOLOv8 Nano is a compact version of YOLO, designed with fewer parameters compared to other YOLOv8 models. Although it exhibits slightly lower accuracy, it is still practical for various applications. Its smaller size enables deployment on portable devices such as mobile phones, laptops, or other low-spec hardware devices.</p>
                    </div>
                  
                  </div>
                </div>

                <div className="col-lg-6 ml-auto"  data-aos="fade-up" data-aos-delay="100">
                              
                  <div className="owl-carousel slide-one-item-alt">
                    <img src={process.env.PUBLIC_URL +"/imgs/slide1.png"} alt="WildEye" className="img-fluid"/>
                    <img src={process.env.PUBLIC_URL +"/imgs/slide2.png"} alt="YOLO" className="img-fluid"/>
                    <img src={process.env.PUBLIC_URL +"/imgs/slide3.png"} alt="YOLOv8" className="img-fluid"/>
                    <img src={process.env.PUBLIC_URL +"/imgs/slide4.png"}alt="YOLOv8n" className="img-fluid"/>
                  </div>

                  <div className="owl-custom-direction">
                    <a href="/#" className="custom-prev"><span className="icon-keyboard_arrow_left"></span></a>
                    <a href="/#" className="custom-next"><span className="icon-keyboard_arrow_right"></span></a>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <br/><br/><br/><br/><br/>

          <div className="site-section section-1">
            <div className="container">
              <div className="row">
                
                <div className="col-lg-5 mr-auto mb-5">
                  <img src={process.env.PUBLIC_URL +"/imgs/Identification.png"} alt="WildEye" className="img-fluid"/>
                </div>
                
                <div className="col-lg-5 mr-auto mb-5"  data-aos="fade-up">
                  <div className="mb-5">
                    <h2 className="section-title">WildEye</h2>
                    <p className="black-text">WildEye is a wildlife species identification and offence registration web app.<br/>In the WildEye system, images captured by cameras or other devices are passed as input to the YOLO algorithm for object detection and recognition. By feeding the images through the trained YOLO model, WildEye can identify and localize wildlife species present in the images.</p>
                    <ul className="ul-check list-unstyled success">
                      <li className="black-text">Ease Of Use</li>
                      <li className="black-text">Saves Manual Labour</li>
                      <li className="black-text">Brilliant Accuracy</li>
                      <li className="black-text">Fully Automatic Animal Spotting System</li>
                      <li className="black-text">Species Identification</li>
                      <li className="black-text">Offence Registration</li>
                    </ul>  
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="site-section bg-dark" id="features-section" data-aos="fade">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 mb-5">
                  <h2 className="section-title">Features</h2>
                </div>
              </div>
            </div>
              
            <div className="owl-carousel nonloop-block-14">

              <div className="service">
                <div>
                  <span className="custom-icon-wrap"><img src={process.env.PUBLIC_URL +"/icons/ease-of-use.png"} alt="Ease-Of-Use-Icon" height="60px" width="60px"/></span>
                  <h3>Ease Of Use</h3>
                  <p className="black-text">Simple, elegant and mobile-compatible interface.<br/><br/><br/><br/><br/></p>
                </div>
              </div>

              <div className="service">
                <div>
                  <span className="custom-icon-wrap"><img src={process.env.PUBLIC_URL +"/icons/saves-manual-labour.png"} alt="Saves-Manual-Labour-Icon" height="60px" width="60px"/></span>
                  <h3>Saves Manual Labour</h3>
                  <p className="black-text">It saves a tremendous amount of time for biology researchers and the human volunteers that help by labeling images.<br/>Thus it dramatically reduces the cost to gather valuable information from wild habitats.</p>
                </div>
              </div>

              <div className="service">
                <div>
                  <span className="custom-icon-wrap"><img src={process.env.PUBLIC_URL +"/icons/accuracy.png"} alt="Accuracy-Icon" height="60px" width="60px"/></span>
                  <h3>Brilliant Accuracy</h3>
                  <p className="black-text">It identifies animals in the input images and gives results with bounding boxes with an accuracy of 96%.<br/><br/><br/><br/></p>
                </div>
              </div>

              <div className="service">
                <div>
                  <span className="custom-icon-wrap"><img src={process.env.PUBLIC_URL +"/icons/animal-spotting.png"} alt="Fully-Automatic-Animal-Spotting-System-Icon" height="60px" width="60px"/></span>
                  <h3>Fully Automatic Animal Spotting System</h3>
                  <p className="black-text">It can automatically identify species of animals in the input images and can easily give truly real-time results.<br/><br/><br/></p>
                </div>
              </div>

              <div className="service">
                <div>
                  <span className="custom-icon-wrap"><img src={process.env.PUBLIC_URL +"/icons/species-identification.png"} alt="Species-Identification-Icon" height="60px" width="60px"/></span>
                  <h3>Species identification</h3>
                  <p className="black-text">Bounding box species identification of the input image for 11 species that include Butterfly, Elephant, Tiger, Lion, Horse, Panda, Bear, Monkey, Dog, Deer and Human.<br/><br/></p>
                </div>
              </div>

              <div className="service">
                <div>
                  <span className="custom-icon-wrap"><img src={process.env.PUBLIC_URL +"/icons/offence-registration.png"} alt="Offence-Registration-Icon" height="60px" width="60px"/></span>
                  <h3>Offence Registration</h3>
                  <p className="black-text">Users can register offences towards animals by uploading an image or the geo-location or both.<br/><br/><br/><br/></p>
                </div>
              </div>

            </div>
          </div>

          <div className="site-section" id="glance-section"  data-aos="fade">
        <div style={{ marginBottom: '50px' }} className="container">

          <div className="row align-items-center">
            <div className="col-md-5 order-1 order-md-2 mb-5 mb-md-0">
              <video src={process.env.PUBLIC_URL +"/demo/demo.mp4"} className="img-fluid" controls loop />
            </div>
            
            <div className="col-md-6 mr-auto order-2 order-md-1">  
              <h2 className="section-title mb-3">At a Glance</h2>
              <p className="black-text mb-5">In this captivating demo of our project, we showcase the incredible capabilities of our system by using a video that features mesmerizing footage of zebras and graceful giraffes. The results we achieved are nothing short of remarkable, as our advanced model demonstrates its exceptional ability to detect and classify these magnificent creatures with utmost accuracy.</p>
              <p style={{ fontWeight: '500', color: '#C3073F' }} className="mb-5">Note: Model can only identify the animals on which it is trained on.</p>
            </div>
          </div>
        </div>
        <div className="site-section bg-dark" id="demo-section" data-aos="fade">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 mb-5">
                  <h2 className="section-title">Demo</h2>
                </div>
              </div>
            </div>
          <div style={{ marginTop: '100px', marginBottom: '50px' }}>
            <Detect/>
          </div>
        </div>
        <div style={{ marginTop: '100px' }} className="container">
          <div className="row">
            <div style={{ textAlign: 'center' }} className="col-lg-3 col-md-6 col-sm-12 mb-5">
                <img style={{ display: 'inline-block' }} src={react} width="250" height="250" alt="react" />
            </div>
            <div style={{ textAlign: 'center' }} className="col-lg-3 col-md-6 col-sm-12 mb-5">
                <img style={{ display: 'inline-block' }} src={tf} width="250" height="250" alt="tf" />
            </div>
            <div style={{ textAlign: 'center', color: 'black' }} className="col-lg-3 col-md-6 col-sm-12 mb-5">
                <img style={{ display: 'inline-block' }} src={keras} width="200" height="200" alt="keras" />
                <h1>Keras</h1>
            </div>
            <div style={{ textAlign: 'center', color: 'black' }} className="col-lg-3 col-md-6 col-sm-12 mb-5">
                <img style={{ display: 'inline-block' }} src={colab} width="200" height="200" alt="colab" />
                <h1>Colab</h1>
            </div>
          </div>
        </div>
      </div>
          
          <footer className="footer-section bg-dark">
            <div className="container">
              <div className="row">
                
                <div className="col-md-4">
                  <h3>About Us</h3>
                  <p>We are an exceptional team of talented programmers, driven by our unwavering passion for coding and an insatiable curiosity for technology. Our collective knowledge and diverse backgrounds converge to form a powerhouse of creativity and innovation.</p>
                </div>

                <div className="col-md-3 ml-auto">
                  <h3>Links</h3>
                  <ul className="list-unstyled footer-links">
                    <li><a href="#home-section" className="smoothscroll">Home</a></li>
                    <li><a href="#features-section" className="smoothscroll">Features</a></li>
                    <li><a href="#glance-section" className="smoothscroll">Glance</a></li>
                    <li><a href="#demo-section" className="smoothscroll">Demo</a></li>
                    <li><a href="https://github.com/shreehari-revankar" className="smoothscroll">Github</a></li>
                  </ul>
                </div>

                <div className="col-md-4">
                  <h3>Project</h3>
                  <p>This is a project we made as a part of our SEM 6 curriculum.</p>
                </div>
              
              </div>
            </div>
          </footer>
        </div>
      </div>
    )
}

export default Landing;