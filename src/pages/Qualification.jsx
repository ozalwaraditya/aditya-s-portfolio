import { useState } from "react";
import "../components/style/Qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        {/* Tabs */}
        <div className="qualification__tabs">
          <div
            className={`qualification__button button--flex ${
              toggleState === 1 ? "qualification__active" : ""
            }`}
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__cap"></i> Education
          </div>

          <div
            className={`qualification__button button--flex ${
              toggleState === 2 ? "qualification__active" : ""
            }`}
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
          </div>
        </div>

        {/* Sections */}
        <div className="qualification__sections">
          {/* Education Section (Aligned & Ordered) */}
          <div
            className={`qualification__content ${
              toggleState === 1 ? "qualification__content-active" : ""
            }`}
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Basic Education</h3>
                <span className="qualification__subtitle">RHV English Medium - Jalna</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2005 - 2019
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Higher Education</h3>
                <span className="qualification__subtitle">NSR Impluse</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.Tech</h3>
                <span className="qualification__subtitle">MITAOE - Pune</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2025
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          {/* Experience Section (Aligned & Ordered) */}
          <div
            className={`qualification__content ${
              toggleState === 2 ? "qualification__content-active" : ""
            }`}
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Technical Intern</h3>
                <span className="qualification__subtitle">Charge Eazy</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Jun - July
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Robotics</h3>
                <span className="qualification__subtitle">Personal</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - Personal
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
