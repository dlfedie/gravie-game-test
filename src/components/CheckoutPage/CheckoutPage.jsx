import React, { Component } from 'react';
import { connect } from 'react-redux';

class CheckoutPage extends Component {

    render() {

        let cartList = this.props.cart.map((game, index) => {
            return (
                <article className="card" key={game.name}>
                    <img src={game.image.small_url} alt={game.name} />
                    <div className="card-content">
                        <h2>{game.name}</h2>
                    </div>
                </article>
            ) 
        })

        return (
            <>
                <h1>Checkout!</h1>
                <div>
                    <section className="cards">
                        {this.props.cart &&
                            cartList}
                    </section>
                    {/* {JSON.stringify(this.props.cart)} */}
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