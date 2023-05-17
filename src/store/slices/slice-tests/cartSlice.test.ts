import cartSlice, { CartState, addToCart, decrement, increment, removeItem, setTotalProductsPrice } from "../cartSlice"

test('should add new product to cart', () => {

    const previousState: CartState = {
        products: [],
        totalPrice: 0
    }
    

    const action = addToCart({id: '1', name: 'ball', price: 50, img: 'img', quantity: 1})

    const newState = cartSlice(previousState, action)
    
    expect(newState.products.length).toBe(1)
    expect(newState.products[0].name).toBe('ball')
  })

test('should remove product to cart', () => {

    const previousState: CartState = {
        products: [
            {id: '1', name: 'ball', price: 50, img: 'img', quantity: 1},
            {id: '2', name: 'pen', price: 150, img: 'img', quantity: 3}
        ],
        totalPrice: 0
    }

    const action = removeItem({id: '1'})

    const newState = cartSlice(previousState, action)
    
    expect(newState.products.length).toBe(1)
    expect(newState.products[0].name).toBe('pen')
})


test('should increment product quantity in cart', () => {

    const previousState: CartState = {
        products: [
            {id: '1', name: 'ball', price: 50, img: 'img', quantity: 1},
            {id: '2', name: 'pen', price: 150, img: 'img', quantity: 3}
        ],
        totalPrice: 0
    }

    const action = increment({id: '1'})

    const newState = cartSlice(previousState, action)
    
    expect(newState.products[0].quantity).toBe(2)
})

test('should decrement product quantity in cart', () => {

    const previousState: CartState = {
        products: [
            {id: '1', name: 'ball', price: 50, img: 'img', quantity: 1},
            {id: '2', name: 'pen', price: 150, img: 'img', quantity: 3}
        ],
        totalPrice: 0
    }

    const action = decrement({id: '2'})

    const newState = cartSlice(previousState, action)
    
    expect(newState.products[1].quantity).toBe(2)
})

test('should set total products price', () => {

    const previousState: CartState = {
        products: [
            {id: '1', name: 'ball', price: 50, img: 'img', quantity: 1},
            {id: '2', name: 'pen', price: 150, img: 'img', quantity: 3}
        ],
        totalPrice: 0
    }

    const action = setTotalProductsPrice({total: 1000})

    const newState = cartSlice(previousState, action)
    
    expect(newState.totalPrice).toBe(1000)
})