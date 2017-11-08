import React from "react";
import {getFormattedDate} from "../../../../utils/dateUtil";

export default class ViewOffer extends React.Component {

  componentDidMount() {
    this.props.getOffer(this.props.params.id);
  }

  getOffer() {
    const
      {offer} = this.props,
      {item} = offer;

    return (
      <div className="ViewOffer">
        <div className="offer-header">{offer.title}</div>
        <div className="photo-gallery">
          <img src={item.images[0]}/>
        </div>
        <div className="description">
          <div className="item-name">{offer.item.name}</div>
          <div className="price">{offer.price}</div>
          <div className="availability">{getFormattedDate(offer.startDate)} - {getFormattedDate(offer.endDate)}</div>
          <div className="address">City: {offer.item.address.city}</div>
          <div className="delivery">{offer.item.name}
            <div className="price">price: {offer.deliveryPrice}</div>
            <div className="price">distance: {offer.deliveryMaxDistance}</div>
          </div>
          <div className="description">{offer.description}</div>
        </div>
      </div>
    );
  }

  render() {
    const {offer} = this.props;

    if(offer) {
      return this.getOffer();
    } else {
      return <div>LOADING...</div>
    }
  }
}