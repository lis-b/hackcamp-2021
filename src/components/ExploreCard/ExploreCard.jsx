import * as React from "react";
import { Link } from "wouter";
import "./ExploreCard.sass";

class ExploreCard extends React.Component {
  
  render() {
    const { name, description, url } = this.props;
  
    return (
      <div className="card-explore">
        <div className="scrollable-wrapper">
          <h3>{name}</h3>
          <span>{description}</span>
          <Link className="learn-more" href={url}>Learn more</Link>
        </div>
      </div>
    );
  }
}

ExploreCard.defaultProps = {
  name: "Sample Movement",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere ullamcorper id aliquet eget gravida. Molestie ultrices convallis sit sed vitae. Quisque vel sit ut egestas lectus cras in viverra. Tortor nunc orci nam tempus porttitor ipsum, tellus ac.",
  url: "/sample"
}

export default ExploreCard;