import * as React from "react";
import { SampleMovements } from "./SampleMovements.js";
import ExploreCard from "./ExploreCard"
import "./ExploreCardSection.sass";

class ExploreCardSection extends React.Component {
  
  render() {
    const { name, movements } = this.props;
  
    return (
      <div className="explore-section">
        <h2>{name}</h2>
        <div className="cards">
          {movements.map((movement, i) => (
            <ExploreCard 
              name={movement.name}
              description={movement.description}
              url={movement.url == "" ? undefined : movement.url}
              key={i}
              />
        ))}
        </div>
      </div>
    );
  }
}

ExploreCardSection.defaultProps = {
  name: "More Movements",
  movements: SampleMovements
}

export default ExploreCardSection;