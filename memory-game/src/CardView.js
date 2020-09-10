import React, { Component } from "react";

class CardView extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if (!this.props.matched && !this.props.imageUp) {
      this.props.onClick(this.props.id, this.props.image);
    }
  }

  render() {
    let imgPath = "./images/";
    if (this.props.imageUp) {
      imgPath = imgPath + this.props.image + ".jpg";
    } else {
      imgPath = imgPath + "back.jpg";
    }

    let className = "Card";
    if (this.props.matched) {
      className = className + " Matched";
    }

    return (
      <img
        className={className}
        src={require(`${imgPath}`)}
        alt=""
        onClick={this.onClick}
      />
    );
  }
}

export default CardView;
