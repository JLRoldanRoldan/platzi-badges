import React from "react";
import Navbar from "../components/Navbar";
import header from "../images/badge-header.svg";
import "../components/styles/BadgeNew.css";
import BadgeForm from "../components/BadgeForm";
import Badge from "../components/Badge";
import avatar from "../images/image.png";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName="Jorge"
                lastName="Roldan-Roldan"
                twitter="JLRoldanRoldan"
                jobTitle="Frontend Engineer"
                avatar={avatar}
              />
            </div>

            <div className="col-6">
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
