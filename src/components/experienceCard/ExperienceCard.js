import React, { Component } from "react";
import "./ExperienceCard.css";
import { Fade } from "react-reveal";

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const theme = this.props.theme;
    return (
      <Fade bottom duration={2000} distance="40px">
        <div className="experience-card">
          <div className="experience-card-logo-div">
            <img
              className="experience-card-logo"
              src={require(`../../assets/images/${experience["logo_path"]}`)}
              alt=""
            />
          </div>
          <div className="experience-card-body">
            <div className="experience-card-header">
              <div className="experience-card-heading-left">
                <h3 className="experience-card-title">{experience["title"]}</h3>
                <p className="experience-card-company">
                  <a
                    href={experience["company_url"]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {experience["company"]}
                  </a>
                </p>
              </div>
              <div className="experience-card-heading-right">
                <p className="experience-card-duration">
                  {experience["duration"]}
                </p>
                <p className="experience-card-location">
                  {experience["location"]}
                </p>
              </div>
            </div>
            <p className="experience-card-description">
              {experience["description"]}
            </p>
          </div>
        </div>
      </Fade>
    );
  }
}

export default ExperienceCard;
