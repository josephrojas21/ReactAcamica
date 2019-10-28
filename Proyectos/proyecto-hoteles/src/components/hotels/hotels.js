import React, {Component, Fragment} from 'react';

class Hotels extends Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }
    render() {
        return (
            <Fragment>
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src="https://res.cloudinary.com/dxm7p7ceq/image/upload/v1556670946/la-bamba-de-areco_qcao4h.jpg" alt="Sainte Jeanne Boutique & Spa" />
                        </figure>
                    </div>
                    <div className="card-content">
                        <p className="title is-4">Sainte Jeanne Boutique & Spa</p>
                       
                    </div>
                    <div className="card-footer">
                        <p>dsd</p>
                    </div>
                </div>
            </Fragment>
            
        )
    }
}

export default Hotels;