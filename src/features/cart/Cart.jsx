
import { useSelector,useDispatch } from 'react-redux';
import { addToCart,removeFromCart } from './cartSlice';

function Cart() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleAddToCart = item =>{
        dispatch(addToCart(item));
    };
    const handleRemoveFromCart = item => {
        dispatch(removeFromCart(item));
    }

    return (
        <div>
           
            <div>
           <h2>Shopping cart</h2>
                { cart.map(item =>  (
                    <div key={item.id}>
                        <p>{item.name}</p>
                        <button onClick={()=>handleRemoveFromCart(item)}>
                            Eliminar del carrito
                        </button>
                    </div>
                ))}
            </div>
            <div>
                <h2>Products</h2>
                {['Huevo','Pan','Leche','Azucar'].map((item,index) => (
                   <div key={index}>
                        <p>{item}</p>
                        <button onClick={()=> handleAddToCart({id:index,name:item})}>Agregar al carrito</button>

                   </div> 
                ))}
            </div>
        </div>
    );
}

export default Cart;