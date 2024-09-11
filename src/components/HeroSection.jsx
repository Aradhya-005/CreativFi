import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/HeroSection.css";

import {assets} from '../assets/assets'

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login");
  };

  return (
    <>
      <section>
        <div className="hero-section">
          <div className="container-1">
            <h5>
              <span className="green-text">This Is How</span>
            </h5>
            <h5>Good Creators </h5>
            <h5> Work For Good </h5>
            <h5> Companies </h5>
            <p>
              Forget the old rules. You can have the best people. Right now.
              Right here.
            </p>
            <button className="started-button" onClick={handleGetStarted}>
              Get Started
            </button>
          </div>
          <div className="container-2">
            <img className="hero-img" src={assets.HeroImg} alt="hero-img" />
          </div>
        </div>
      </section>
      <section className="showcase">
        <div>
          <h5>
            Instantly access specialized freelancing opportunities for content
            creators.
          </h5>
        
          <div class="grid-container">
            <div class="grid-item"><img src={assets.Designer} alt="designer"/></div>
            <div class="grid-item"><img src={assets.Books} alt="books"/></div>
            <div class="grid-item"><img src={assets.Producer2}alt="producer"/></div>
            <div class="grid-item"><img src={assets.Graphics} alt="graphics"/></div>
            <div class="grid-item"><img src={assets.Designer2} alt="designer"/></div>
            <div class="grid-item"><img src={assets.videoProducer} alt="videoproducer"/></div>
            <div class="grid-item"><img src={assets.Writer} alt="writer"/></div>
            <div class="grid-item"><img src={assets.SocialInfluencer} alt="influencer"/></div>
          </div>
        </div>
      </section>
      <section className="Stats">
        <div className="user-stats">
          <div className="grid-container-2">
            <div className="grid-item-2">
              <h2>Writers</h2>
              <p>
                Discover a range of writing gigs from blog posts to technical
                manuals, tailored to your expertise.
              </p>
            </div>
            <div className="grid-item-2">
              <h2>Designers</h2>
              <p>
                Find specialized design projects including branding, UI/UX
                design, and more, suited to your creative skills.
              </p>
            </div>
            <div className="grid-item-2">
              <h2>Video Producers</h2>
              <p>
                Explore opportunities for creating engaging video content, from
                promotional videos to educational series.
              </p>
            </div>
            <div className="grid-item-2">
              <h2>Social Media Influencers</h2>
              <p>
                Connect with brands and projects that align with your personal
                brand and audience on various social platforms.
              </p>
            </div>
          </div>
        </div>
      </section>
     
      <section className="feedback-section">
        <div className="feedback">
          <div>
            <h1>Feedback From Some of Our Users</h1>
          </div>
          <div class="feedback-cards">
            <div class="card">
              <img src={assets.Kelvin} alt="Kelvin Jones" class="profile-img" />
              <h2>Kelvin Jones</h2>
              <p class="username">@kelvinjones</p>
              <p class="quote">
                <i class="quote-icon">“</i> This platform has truly transformed
                the way I find freelance opportunities. The job listings are
                spot-on, and the communication with clients is seamless. Highly
                recommend for any freelance professional looking to elevate
                their career! <i class="quote-icon">”</i>
              </p>
            </div>

            <div class="card">
              <img src={assets.John} alt="Jane Doe" class="profile-img" />
              <h2>Jane Doe</h2>
              <p class="username">@janedoe</p>
              <p class="quote">
                <i class="quote-icon">“</i> The user-friendly interface and
                dedicated job listings have made my freelancing journey much
                easier. I’ve been able to find clients that truly value my
                skills and offer great opportunities. This site is a
                game-changer! <i class="quote-icon">”</i>
              </p>
            </div>

            <div class="card">
              <img src={assets.Rian} alt="Rian" class="profile-img" />
              <h2>Rian</h2>
              <p class="username">@rian</p>
              <p class="quote">
                <i class="quote-icon">“</i> Finding the right gigs has never
                been easier. The tailored job listings and real-time chat with
                clients have been incredibly useful. This platform is a
                must-have for anyone serious about freelancing.{" "}
                <i class="quote-icon">”</i>
              </p>
            </div>
          </div>
        </div>
        <div className="heading">
          <div className="overlapp">
            <h1>Get work done on Anywork with ease</h1>
          </div>
        </div>
      </section>
      <section className="how-it-works">
        <h2 className="how-it-works-title">How It Works</h2>
        <div className="how-it-works-grid">
          <div className="how-it-works-item">
            <div className="item-number">1</div>
            <h3 className="item-title">
              Find the Right Freelance Professional
            </h3>
            <p className="item-description">
              Post your task or browse through profiles to find and chat with
              your preferred talent in real-time.
            </p>
          </div>
          <div className="how-it-works-item">
            <div className="item-number">2</div>
            <h3 className="item-title">
              Hire the Right Freelance Professional
            </h3>
            <p className="item-description">
              Receive quotes from interested freelancers, compare their offers,
              and hire the best fit for your project.
            </p>
          </div>
          <div className="how-it-works-item">
            <div className="item-number">3</div>
            <h3 className="item-title">
              Work Efficiently with Your Freelancer
            </h3>
            <p className="item-description">
              Provide inputs, communicate in real-time, and track progress using
              our comprehensive work management tools.
            </p>
          </div>
          <div className="how-it-works-item">
            <div className="item-number">4</div>
            <h3 className="item-title">Pay with Ease and Assurance</h3>
            <p className="item-description">
              Review and approve the freelancer’s payment only when you are 100%
              satisfied with the work delivered.
            </p>
          </div>
        </div>
      </section>
      <section className="bottom-section">
        <div className="bottom-heading">
          <div className="bottom-overlay">
            <div className="specialized-services-section">
              <div className="specialized-services-heading">
                <h2>Opportunities for Content Creators</h2>
              </div>
              <div className="specialized-services-grid">
                <div className="specialized-service-item">
                  <h3>Writers</h3>
                  <p>
                    Find freelance writing opportunities for various genres,
                    including blogging, copywriting, technical writing, and
                    more.
                  </p>
                </div>
                <div className="specialized-service-item">
                  <h3>Designers</h3>
                  <p>
                    Explore design projects ranging from graphic design to
                    UI/UX, including branding, web design, and print materials.
                  </p>
                </div>
                <div className="specialized-service-item">
                  <h3>Video Producers</h3>
                  <p>
                    Access freelance gigs for video production, including
                    editing, scriptwriting, animation, and videography.
                  </p>
                </div>
                <div className="specialized-service-item">
                  <h3>Social Media Influencers</h3>
                  <p>
                    Connect with brands and campaigns looking for influencers to
                    promote their products across various social media
                    platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
