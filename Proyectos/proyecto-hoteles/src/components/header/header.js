import React, {Component} from 'react';

class Header extends Component{
    render() {
        return (
            <section class="hero is-success">
                <div class="hero-body">
                    <div class="container">
                    <h1 class="title">
                        Primary title
                    </h1>
                    <h2 class="subtitle">
                        Primary subtitle
                    </h2>
                    </div>
                </div>
            </section>
        )
    }
}

export default Header;