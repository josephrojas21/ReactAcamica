/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment} from 'react';

const Hotels = ({hotels}) => {

    const getPrice = (cantPrices) =>{
        let prices = []
        const maxPrice = 4;
        for (let i = 0; i < cantPrices; i++) {
            prices.push(<i className="fas fa-dollar-sign" style={{margin: '0 .125em'}}></i>);
        }
        for (let i = 0; i < maxPrice - cantPrices; i++) {
            prices.push(<i className="fas fa-dollar-sign" style={{margin: '0 .125em', opacity: '.25'}}></i>);
        }
        return prices;
    }
        

    return(
        <Fragment>
                {hotels.map(cardHotel =>(
                    <div className="column is-4">
                        <div className="card" key={cardHotel.slug}>
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img src={cardHotel.photo} alt="HotelsImage" />
                            </figure>
                        </div>
                        <div className="card-content">
                            <p className="title is-4">{cardHotel.name}</p>
                            <p>{cardHotel.description}</p>
                            <div className="field is-grouped is-grouped-multiline" style={{marginTop: '1em'}}>
                            <div className="control">
                                <div className="tags has-addons">
                                <span className="tag is-medium is-info"><i className="fas fa-map-marker"></i></span>
                                <span className="tag is-medium">{cardHotel.city}, {cardHotel.country}</span>
                                </div>
                            </div>
                            <div className="control">
                                <div className="tags has-addons">
                                <span className="tag is-medium is-info"><i className="fas fa-bed"></i></span>
                                <span className="tag is-medium">{cardHotel.rooms} Habitaciones</span>
                                </div>
                            </div>
                            <div className="control">
                                <div className="tags">
                                <span className="tag is-medium is-info">
                                    {getPrice(cardHotel.price)}
                                </span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <a href="javascript:alert('No implementamos esto aún :(')" className="card-footer-item has-background-primary has-text-white has-text-weight-bold">Reservar</a>
                        </div>
                    </div>
                </div>
                ))}    
        </Fragment>
    )
}

export default Hotels;