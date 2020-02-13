import React from 'react';

const Header = ({hotels,filters}) =>{
    

    return (
        <section className="hero is-success">
            <div className="hero-body">
                <div className="container">
                <h1 className="title">
                    AirReactBn
                </h1>
                <h2 className="subtitle">
                    Desde  {filters.dateFrom} hasta {filters.dateTo}  {hotels.length ? <p>hay {hotels.length} hoteles</p> : <p>No hay hoteles en esta fecha</p>}
                </h2>
                </div>
            </div>
        </section>
    )
        
    
}

export default Header;