import React, {Component} from 'react';

class Filters extends Component{
    render() {
        return (
            
            <section class="hero is-success">
                <div class="hero-body">
                    <div class="columns">
                        <div class="column">
                            <div class="field is-horizontal">
                                <div class="field-body">
                                    <div class="field">
                                        <p class="control  has-icons-left has-icons-right">
                                        <input class="input is-success" type="date" placeholder="Email" />
                                        <span class="icon is-small is-left">
                                            <i class="fas fa-calendar"></i>
                                        </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="field is-horizontal">
                                    <div class="field-body">
                                        <div class="field">
                                            <p class="control  has-icons-left has-icons-right">
                                            <input class="input is-success" type="date" placeholder="Email" />
                                            <span class="icon is-small is-left">
                                                <i class="fas fa-calendar"></i>
                                            </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div class="column">
                            <div class="control">
                                <div class="select">
                                    <select>
                                        <option>Select dropdown</option>
                                        <option>With options</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="control">
                                <div class="select">
                                    <select>
                                        <option>Select dropdown</option>
                                        <option>With options</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="control">
                                <div class="select">
                                    <select>
                                        <option>Select dropdown</option>
                                        <option>With options</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>     
        )
    }
}

export default Filters;