import React from 'react';

const Header = ({hotels,filters}) =>{
    

    return (
        <section class="hero is-success">
            <div class="hero-body">
                <div class="container">
                <h1 class="title">
                    AirReactBn
                </h1>
                <h2 class="subtitle">
                    Desde  {filters.dateFrom} hasta {filters.dateTo}  {hotels.length ? <p>hay {hotels.length} hoteles</p> : <p>No hay hoteles en esta fecha</p>}
                </h2>
                </div>
            </div>
        </section>
    )
        
    
}

export default Header;