import React, { Component } from 'react';
import { connect } from 'react-redux';

class HistoryPage extends Component {

    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_TRANSACTION_HISTORY'
        })
    }

    render() {

        let historyList = this.props.history.map((transaction, index) => {
            return (
                <article className="checkout-card" key={transaction.transactionID}>
                    <div className="checkout-card-content">
                        <h2>Games:</h2>
                        <ul>
                            {transaction.games && transaction.games.map((game) => { return (<li>{game.name}</li>) })}
                        </ul>
                        <p>{transaction.timestamp}</p>
                    </div>
                </article>
            )
        })

        return (
            <>
                <h1>Transaction History</h1>
                <div>
                    <section className="checkout-cards">
                        {this.props.history &&
                            historyList}
                    </section>
                    {JSON.stringify(this.props.history.games)}
                </div>
            </>
        )
    }
}


const mapStateToProps = (reduxStore) => {
    return {
        history: reduxStore.checkoutCart.historyReducer,
    }
}

export default connect(mapStateToProps)(HistoryPage);