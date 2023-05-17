import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../../firebase-config";
import { useAppDispatch, useAppSelector } from "../../common/hooks/reduxHooks";
import { setProducts } from "../../store/slices/productsSlice";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import s from './Homepage.module.scss'
import Button from "@mui/material/Button";
import { addToCart, decrement, increment } from "../../store/slices/cartSlice";

export const Homepage = () => {
    const productsCollectionRef = collection(db, "products");
    const dispatch = useAppDispatch();
    const products = useAppSelector(state => state.productsSlice.products);
    const productsInCart = useAppSelector(state => state.cart.products)


    useEffect(() => {
        const getProducts = async () => {
        const data = await getDocs(productsCollectionRef);
        const products = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))    
        dispatch(setProducts({products}));
    };
        getProducts()
    }, [dispatch]);

    const onAddHandler = (id: string, price: number, name: string, img: string, quantity: number) => dispatch(addToCart({id, name, price, img, quantity})) 
    
    const productQuantity = (itemId:string) => productsInCart.find(item => item.id === itemId)?.quantity



    const onIncrement = (id: string) => {
        dispatch(increment({id}))  
    }

    const onDecrement = (id: string) => {
        dispatch(decrement({id}))
    }

    const isInCart = (id: string) => {
        const product = productsInCart.find(el => el.id === id)
        if (product) return true
    }

    const productsItems = products.map((el) => {
         return <Paper variant="outlined" key={el.id} style={{width: '40%', padding: '10px'}}>
        <img src={el.img} alt={el.name} style={{maxWidth: '100px', }}/>

        <h2>{el.name}</h2>
        <h2>{el.price}$</h2>
        { !isInCart(el.id)  ? 
            <Button onClick={() => onAddHandler(el.id, el.price, el.name, el.img, el.quantity)} variant="contained">Add to cart</Button>
        : 
        <>
         <Button variant="outlined" style={{ fontSize: '15px'}} onClick={() => onDecrement(el.id)}>-</Button>
            { productQuantity(el.id)}
          <Button variant="outlined" style={{ fontSize: '15px'}} onClick={() => onIncrement(el.id)}>+</Button>
          </>
        }

        </Paper >
    }) 

    return <Container maxWidth="lg">
        <h1>Homepage</h1>
        <div className={s.products}>            
            {productsItems}
        </div>

    </Container>
}