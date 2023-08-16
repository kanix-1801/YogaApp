import React from "react";
import Header from "../Components/Header";
import { Typewriter } from "react-simple-typewriter";

function HomePage() {
  const imageStyle = {
    width: "500px",
  };
  return (
    <>
      <Header />

      <div className="container">
        <div className="row home_start_div">
          <div className="col-lg-6 col-md-8">
            <div className="homePageHeadline">
              Get{" "}
              <Typewriter words={["Fit !", "Strong !", "Healthy !"]} loop={0} />
            </div>

            <p className="home_disc_p">
              We are dedicated to helping you tranform your body and mind
              through the power of fitness
            </p>
          </div>
          <div className="col-lg-6 col-md-4 cd">
            <img
              className="home_img"
              style={imageStyle}
              src="yoga.png"
              alt=""
            />
          </div>
        </div>
        <hr></hr>

        <div className="row home_start_div">
          <div className="col-lg-6 col-md-8">
            <div className="homePageHeadline2">Benefits of Yoga</div>
            <p className="home_disc_p2">
              Yoga: where self-discovery meets flexibility, one pose at a time.
              Discover the union of body and spirit through the grace of yoga.
            </p>
          </div>
          <br></br>
          <div className="col-lg-6 col-md-4">
            {/* <h1>Benefits of Yoga</h1> */}
            <ul className="list-group des">
              <li>Improved Flexibility</li>
              <li>Increased Strength</li>
              <li>Enhanced Posture</li>
              <li>Stress Reduction</li>
              <li>Better Breathing</li>
              <li>Mind-Body Connection</li>
              <li>Pain Relief</li>
              <li>Enhanced Balance and Coordination</li>
              <li>Cardiovascular Health</li>
              <li>Weight Management</li>
              <li>Improved Digestion</li>
              <li>Mental Clarity and Focus</li>
              {/* <li>Emotional Well-being</li>
              <li>Immune System Support</li>
              <li>Increased Energy</li>
              <li>Inner Peace and Relaxation</li>
              <li>Social Interaction</li>
              <li>Better Sleep</li> */}
            </ul>
          </div>
        </div>
        <hr></hr>
        <footer class="site-footer">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12">
                <h6>About Us</h6>
                <p class="text-justify">
                  FitHit<i> WANTS TO BE SIMPLE </i> is an initiative to help the
                  upcoming programmers with the code. Scanfcode focuses on
                  providing the most efficient code or snippets as the code
                  wants to be simple. We will help programmers build up concepts
                  in different programming languages that include HTML, CSS,
                  Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.
                </p>
              </div>

              {/* <div class="col-xs-6 col-md-3">
                <h6>Categories</h6>
                <ul class="footer-links">
                  <li>
                    <a href="http://scanfcode.com/category/c-language/">C</a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/category/front-end-development/">
                      UI Design
                    </a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/category/back-end-development/">
                      PHP
                    </a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/category/java-programming-language/">
                      Java
                    </a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/category/android/">Android</a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/category/templates/">
                      Templates
                    </a>
                  </li>
                </ul>
              </div> */}

              {/* <div class="col-xs-6 col-md-3">
                <h6>Quick Links</h6>
                <ul class="footer-links">
                  <li>
                    <a href="http://scanfcode.com/about/">About Us</a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/contact/">Contact Us</a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/contribute-at-scanfcode/">
                      Contribute
                    </a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/privacy-policy/">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/sitemap/">Sitemap</a>
                  </li>
                </ul>
              </div> */}
            </div>
            <br></br>
          </div>
          {/* <div class="container">
            <div class="row">
              <div class="col-md-8 col-sm-6 col-xs-12">
                <p class="copyright-text">
                  Copyright &copy; 2017 All Rights Reserved by
                  <a href="#">Scanfcode</a>.
                </p>
              </div>

              <div class="col-md-4 col-sm-6 col-xs-12">
                <ul class="social-icons">
                  <li>
                    <a class="facebook" href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a class="twitter" href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a class="dribbble" href="#">
                      <i class="fa fa-dribbble"></i>
                    </a>
                  </li>
                  <li>
                    <a class="linkedin" href="#">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </footer>
      </div>
    </>
  );
}

export default HomePage;
