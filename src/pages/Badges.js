import React from "react";
import { Link } from "react-router-dom";

import confLogo from "../images/badge-header.svg";
import "../components/styles/Badges.css";
import BadgeList from "../components/BadgesList";

class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    date: undefine,
  };

  render() {
    console.log("2/4. render()");
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf logo"
              />
            </div>
          </div>
        </div>
        <div className="Badge__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

          <div className="Badges__list">
            <div className="Badges__container">
              <BadgeList badges={this.state.data} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
