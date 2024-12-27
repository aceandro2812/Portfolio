import React, { Component } from "react";
import "./DegreeCard.css";
import { Fade, Flip } from "react-reveal";

class DegreeCard extends Component {
  render() {
    const degree = this.props.degree;
    return (
      <div className="degree-card">
        {degree.logo_path && (
          <Flip left duration={2000}>
            <div className="card-img-div">
              <img
                className="card-img"
                src={require(`../../assets/images/${degree.logo_path}`)}
                alt={degree.alt_name}
              />
            </div>
          </Flip>
        )}
        <Fade right duration={2000} distance="40px">
          <div className="card-body">
            <div className="body-header">
              <div className="body-header-title">
                <h2 className="card-title">{degree.title}</h2>
                <h3 className="card-subtitle">{degree.subtitle}</h3>
              </div>
              <div className="body-header-duration">
                <h3 className="duration">{degree.duration}</h3>
              </div>
            </div>
            <div className="body-content">
              {degree.descriptions.map((sentence) => {
                return <p className="content-list">{sentence}</p>;
              })}
              {degree.website_link && (
                <a
                  href={degree.website_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visit-btn"
                >
                  Visit Website
                </a>
              )}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default DegreeCard;
