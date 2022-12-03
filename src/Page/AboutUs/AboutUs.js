import React, {Component} from 'react';

class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {count: "Текст"}
    }

    increment = () => {
        this.setState({count:""})
    }

    render() {
        return (
            <>
                <button onClick={this.increment}>Кнопка</button>
                <h1> {this.state.count}</h1>

            </>

        );
    }
}

export default AboutUs;