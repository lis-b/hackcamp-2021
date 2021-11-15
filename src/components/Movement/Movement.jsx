import * as React from "react";
import { SampleMovementCards } from "./SampleMovementCards.js";
import ImageCard from "../ImageCard/ImageCard";
import "./Movement.sass";
import { Button } from "react-bootstrap";

class Movement extends React.Component {
  render() {
    const { name, description, cards } = this.props;
    
    return (
      <div className="movement-page">
        <div className="left">
          <div className="wrapper">
            <h1>{name}</h1>
            <span>{description}</span>
            <Button type="button">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M14 0.5C14.2984 0.5 14.5845 0.618527 14.7955 0.829505C15.0065 1.04048 15.125 1.32663 15.125 1.625V12.875H26.375C26.6734 12.875 26.9595 12.9935 27.1705 13.2045C27.3815 13.4155 27.5 13.7016 27.5 14C27.5 14.2984 27.3815 14.5845 27.1705 14.7955C26.9595 15.0065 26.6734 15.125 26.375 15.125H15.125V26.375C15.125 26.6734 15.0065 26.9595 14.7955 27.1705C14.5845 27.3815 14.2984 27.5 14 27.5C13.7016 27.5 13.4155 27.3815 13.2045 27.1705C12.9935 26.9595 12.875 26.6734 12.875 26.375V15.125H1.625C1.32663 15.125 1.04048 15.0065 0.829505 14.7955C0.618527 14.5845 0.5 14.2984 0.5 14C0.5 13.7016 0.618527 13.4155 0.829505 13.2045C1.04048 12.9935 1.32663 12.875 1.625 12.875H12.875V1.625C12.875 1.32663 12.9935 1.04048 13.2045 0.829505C13.4155 0.618527 13.7016 0.5 14 0.5Z" fill="#041121"/>
              </svg>
              <span>Follow this movement</span>
            </Button>
          </div>
        </div>
        
        <div className="right">
          {cards.map((card, i) => (
                     <ImageCard 
                       key={i}
                       username={card.username}
                       avatar={card.avatar}
                       image={card.image}
                       imageAlt={card.imageAlt}
                       description={card.description}
                     />
          ))}
        </div>
      </div>
    );
  }
}

Movement.defaultProps = {
  name: "Climate Action",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere ullamcorper id aliquet eget gravida. Molestie ultrices convallis sit sed vitae. Quisque vel sit ut egestas lectus cras in viverra. Tortor nunc orci nam tempus porttitor ipsum, tellus ac.",
  cards: SampleMovementCards
};

export default Movement;