import productsSlice, { ProductsState, setProducts } from "../productsSlice"


test('should handle set products to an empty array', () => {

    const previousState: ProductsState = {
        products: []
    }

    const products = [
        {id: '1', img: 'img',name: 'orange', price: 400, isInCart: false},
        {id: '2', img: 'img',name: 'apple', price: 500, isInCart: false},
        {id: '3', img: 'img',name: 'garlic', price: 200, isInCart: false},
    ]

    const action = setProducts({products})

    const newState = productsSlice(previousState, action)
    
    expect(newState.products.length).toBe(3)
  })
  