import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import MealForm from './MealForm';
import classes from './MealItem.module.css'

const MealItem = (props) => {

const cartCtx = useContext(CartContext)

const addItemHandler = (amount) => {
cartCtx.addItem({
    name: props.name,
    id: props.id,
    amount: amount,
    price: props.price
})
}

const price = `$${props.price.toFixed(2)}`

return <li className={classes.meal}>
    <div>
        <div><h3>{props.name}</h3></div>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
    </div>
    <div><MealForm id={props.id} onAddItem={addItemHandler}/></div>
</li>
}

export default MealItem; 