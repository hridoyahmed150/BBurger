import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Model from './../../components/UI/Model/Model';
import OrderSummary from './../../components/Burger/OrderSummary/OrderSummary';
import Spinner from './../../components/UI/Spinner/Spinner';
import WithErrorHandeler from './../../hoc/withErrorHandeler/withErrorHandeler';
import axios from './../../axios-orders';

const INGREDIENT_PRICES={
    salad: 50,
    cheese: 40,
    meat: 130,
    bacon: 70
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad:0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 70,
        purchasable:false,
        purchasing:false,
        loading: false
    }

    PurchaseHandel=()=>{
        this.setState({purchasing:true});
    }
    updatePurchaseState=(ingredients)=>{
        const sum=Object.keys(ingredients).map((igkey)=>{
            return ingredients[igkey];
        }).reduce((sum,el)=>{
            return sum+el;
        },0);
        this.setState({ purchasable: sum>0 });
    }

    purchaseCancelHandeler=()=>{
        this.setState({purchasing:false});
    }

    purchaseContinueHandeler=()=>{
        // console.log('continue');
        this.setState({loading:true});
        const order={
            ingredients: this.state.ingredients,
            Price: this.state.totalPrice,
            customer:{
                name:'',
                address:{
                    street:'dhaka',
                    zipCode:'1207',
                    country:'Bangladesh'
                },
                email: 'test@gmail.com'
            },
            deliveryMethod: 'fistest'
        }
        axios.post('/orders.json',order).then(response=>{
            this.setState({loading: false ,purchasing: false});
        }).catch(error=>{
            this.setState({loading: false ,purchasing: false});
        });
    }
    addIngredientHandler=(type)=>{
        const oldCount= this.state.ingredients[type];
        const updatedCount= oldCount +1;
        const updatedIngredients={
            ...this.state.ingredients
        };
        updatedIngredients[type]=updatedCount;
        const priceAddition= INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice= oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler=(type)=>{
        const oldCount= this.state.ingredients[type];
        if (oldCount<=0){
            return;
        }
        const updatedCount= oldCount -1;
        const updatedIngredients={
            ...this.state.ingredients
        };
        updatedIngredients[type]=updatedCount;
        const priceAddition= INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice-priceAddition;
        this.setState({ingredients:updatedIngredients,totalPrice:newPrice});
        this.updatePurchaseState(updatedIngredients);
    }

    render () {
        const disableInfo={
            ...this.state.ingredients
        }
        for (let key in disableInfo){
            disableInfo[key]=disableInfo[key]<=0
            
        }
        let orderSummary=<OrderSummary 
        ingredient={this.state.ingredients}
        purchaseCancel={this.purchaseCancelHandeler}
        purchaseContinur={this.purchaseContinueHandeler}
        price={this.state.totalPrice}/>;
        if(this.state.loading){
            orderSummary=<Spinner />;
        }

        return (
            <Auxiliary>

                <Model show={this.state.purchasing} modelClosed={this.purchaseCancelHandeler}>
                    {orderSummary}
                </ Model>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemove={this.removeIngredientHandler}
                    disable={disableInfo}
                    TotalPrice={this.state.totalPrice}
                    ordered={this.PurchaseHandel}
                    purchasable={this.state.purchasable}
                />
            </Auxiliary>
        );
    }
}

export default WithErrorHandeler(BurgerBuilder);