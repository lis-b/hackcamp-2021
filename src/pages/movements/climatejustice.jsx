import * as React from "react";
import Movement from "../../components/Movement/Movement";
import { ClimateJusticeCards } from "../../constants/Movements/ClimateJusticeCards.js"

class ClimateJustice extends React.Component {
  render() {
    return (
      <Movement
        name="Climate Justice"
        description="On the list of social work’s Great Challenges, it might be surprising to see “strengthen social responses to environmental changes.” The effects of climate change can be seen all over the news from wildfires in Australia to record-breaking temps in the Arctic (one recent paper found that polar bears could be nearly extinct by the end of this century). This might seem like a problem for scientists, not social workers, but climate change can put a strain on resources and impact the wellbeing of entire communities. In reality, addressing climate justice can positively affect many of the other issues on this list, and social workers have the network and skills to mobilize and educate others on its impact."
        cards={ClimateJusticeCards}
      />
    );
  }
}

export default ClimateJustice;