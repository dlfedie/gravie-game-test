import React, { Component } from 'react';
import { connect } from 'react-redux';

class CheckoutPage extends Component {

    removeFromCart = (id) => {
        console.log('id of game: ', id);
        this.props.dispatch({
            type: 'REMOVE_GAME',
            payload: {gameID: id}
        })
    }

    finalizeCheckout = () => {
        console.log('clicked on the checkout button');
        this.props.dispatch({
            type: 'CHECKOUT_FULL_CART',
            payload: this.props.cart
        })
    }

    render() {

        let cartList = this.props.cart.map((game, index) => {
            return (
                <article className="checkout-card" key={game.name}>
                    <img className="checkout-img" src={game.image.small_url} alt={game.name} />
                    <div className="checkout-card-content">
                        <h2 className="display-override">{game.name}</h2>
                        <button className="remove-button" onClick={() => this.removeFromCart(game.id)}>Remove From Cart</button>
                    </div>
                </article>
            ) 
        })

        return (
            <>
                <h1>Checkout</h1>
                <div>
                    <section className="checkout-cards">
                        {this.props.cart &&
                            cartList}
                    </section>
                    {/* {JSON.stringify(this.props.cart)} */}
                </div>
                <div>
                    <button onClick={this.finalizeCheckout}>Checkout!</button>
                </div>
            </>
        )
    }
} 


const mapStateToProps = (reduxStore) => {
    return {
        cart: reduxStore.checkoutCart.checkoutReducer,
    }
}

export default connect(mapStateToProps)(CheckoutPage);