import * as React from "react";
import ExploreCardSection from "../components/ExploreCard/ExploreCardSection";
import { TrendingMovements } from "../constants/TrendingMovements.js";

class Explore extends React.Component {
  render() {
    return (
      <div className="explore-main">
        <h1>Explore Social Movements</h1>
        <ExploreCardSection
          name="Trending"
          movements={TrendingMovements}
          />
        <ExploreCardSection />
      </div>
    ); 
  }
}

export default Explore;