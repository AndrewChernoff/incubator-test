import Paper from "@mui/material/Paper"
import { useAppDispatch, useAppSelector } from "../../common/hooks/reduxHooks"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import { decrement, increment, removeItem, setTotalProductsPrice } from "../../store/slices/cartSlice"
import s from './Cart.module.scss'
import IconButton from "@mui/material/IconButton"
import DeleteIcon from '@mui/icons-material/Delete';
import { OrderFrom } from "../OrderForm/OrderForm"
import { useEffect } from "react"

export const Cart = () => {
    const products = useAppSelector(state => state.cart.products)
    const dispatch = useAppDispatch();

    const getTotalPrice = (): number => {
        let price = 0 
         products.forEach(el => price += (el.price * el.quantity))
        return price    
    }

    useEffect(() => {
        dispatch(setTotalProductsPrice({total: getTotalPrice()}))
    }, [getTotalPrice()])


    const onIncrement = (id: string) => {
        dispatch(increment({id}))  
    }

    const onDecrement = (id: string) => {
        dispatch(decrement({id}))
    }

    const onRemoveItem = (id: string) => {
        dispatch(removeItem({id}))
    }

    if (products.length === 0) {
        return <Container maxWidth="md">
            <h1>The cart is empty</h1>
        </Container> 
    }

    return <Container maxWidth="lg" style={{display: 'flex', marginTop: '15px'}} className={s.cart}>
        <div className={s.products}>
        {
            products.map(el => {
                return <Paper variant="outlined" key={el.id} className={s.product}>
                <img src={el.img} alt={el.name} className={s.product__img}/>
                <div className={s.product__info}>
                <h2>{el.name}</h2>
                <h2>Quantity: {el.quantity}</h2>
                <div className={s.product__btns}>
                <Button variant="outlined" style={{fontSize: '15px'}} onClick={() => onDecrement(el.id)} disabled={el.quantity === 1 ? true : false}>-</Button>
                    <h2>{el.price * el.quantity}$</h2>
                <Button variant="outlined" style={{fontSize: '15px'}} onClick={() => onIncrement(el.id)}>+</Button>
                </div>
                </div>
                <IconButton aria-label="delete" className={s.product__delete_btn} onClick={() => onRemoveItem(el.id)}>
                    <DeleteIcon />
                </IconButton>
                </Paper >
            })
        }

        <p>Total price: {getTotalPrice()}$</p>
        </div>

        <Paper variant="outlined" className={s.form}>
            <OrderFrom />
        </Paper>
    </Container>
}