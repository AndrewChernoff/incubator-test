import Paper from "@mui/material/Paper"
import { useAppDispatch, useAppSelector } from "../../common/hooks/reduxHooks"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import { decrement, increment } from "../../store/slices/cartSlice"
import s from './Cart.module.scss'

export const Cart = () => {
    const products = useAppSelector(state => state.cart.products)
    const dispatch = useAppDispatch();


    const onIncrement = (id: string) => {
        dispatch(increment({id}))  
    }

    const onDecrement = (id: string) => {
        dispatch(decrement({id}))
    }

    return <Container maxWidth="md">
        {
            products.map(el => {
                return <Paper variant="outlined" key={el.id} className={s.product}>
                <img src={el.img} alt={el.name} className={s.product__img}/>
                <div className={s.product__info}>
                <h2>{el.name}</h2>
                <h2>Quantity: {el.quantity}</h2>
                <div className={s.product__btns}>
                <Button variant="outlined" style={{background: "white", fontSize: '15px'}} onClick={() => onDecrement(el.id)}>-</Button>
                    <h2>{el.price * el.quantity}$</h2>
                <Button variant="outlined" style={{background: "white", fontSize: '15px'}} onClick={() => onIncrement(el.id)}>+</Button>
                </div>
                </div>

                </Paper >
            })
        }
    </Container>
}