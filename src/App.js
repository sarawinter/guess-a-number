import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { guess } from './store/actions/player';
import { initGame } from './store/actions/ai';
import './_app.css';

import { connect } from 'react-redux';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            number: 0
        }
    }

    componentDidMount() {
        this.props.actions.initGame();
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.actions.guess(this.state.number);
    }

    render() {

        const history = this.props.history.map((item, index) => <li key={index}>{item.guessedNumber}</li>)

        return (
            <div className="App">
                <h1>REDUX</h1>
                <p>Latest guess: {this.props.guessedNumber}</p>
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="number" value={this.state.number} onChange={this.handleInputChange} />
                    <button type="submit" disabled={this.props.gameIsWon}>Guess</button>
                </form>
                <p>{this.props.message}</p>
                <div>
                    <ul>
                        {history}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        guessedNumber: state.player.guessedNumber,
        history: state.player.history,
        message: state.ai.message,
        gameIsWon: state.ai.gameIsWon
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            guess,
            initGame
        }, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
