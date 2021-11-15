import * as React from "react";
import "./ImageCard.sass";

class ImageCard extends React.Component {
  
  render() {
    const { username, avatar, image, imageAlt, description } = this.props;
    
    return (
      <div className="card-image">
        <div className="scrollable-wrapper">
          <div className="user">
            <img className="avatar" src={avatar} alt="" />
            <span>{username}</span>
          </div>
          <img className="post" src={image} alt={imageAlt} />
          <div className="description">
            {description}
          </div>
        </div>
      </div>
    );
  }
}

ImageCard.defaultProps = {
  username: "Anonymous",
  avatar: "https://place-hold.it/24x24?text=A",
  image: "https://place-hold.it/380x256",
  imageAlt: "",
  description: "Description Text - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada nascetur tristique enim, nulla turpis. Nibh quis dolor nibh leo justo, non risus purus sit."
};

export default ImageCard;