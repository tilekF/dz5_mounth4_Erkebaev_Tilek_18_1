import React, {Component} from 'react';

class CountPage extends Component {
    constructor(props) {
        super(props);
        this.state = {works: []}
    }

    Work = () => {
        this.setState({works: this.state.count = ["Work1", "Work1"]})
    }

    render() {
        return (
            <>
                <button onClick={this.Work}>get</button>
                <ul>
                    <li>{this.state.count}...</li>
                    <li>{this.state.count}...</li>
                </ul>

            </>

        );
    }
}

export default CountPage;