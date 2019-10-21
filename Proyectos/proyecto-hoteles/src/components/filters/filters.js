import React, {Component} from 'react';

class Filters extends Component{
    render() {
        return (
            <section class="hero is-success">
                <div class="hero-body">
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">From</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <p class="control  has-icons-left has-icons-right">
                                    <input class="input is-success" type="date" placeholder="Email" />
                                    <span class="icon is-small is-left">
                                    <i class="fas fa-envelope"></i>
                                    </span>
                                    <span class="icon is-small is-right">
                                    <i class="fas fa-check"></i>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        )
    }
}

export default Filters;