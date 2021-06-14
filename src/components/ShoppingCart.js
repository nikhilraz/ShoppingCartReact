import React,{useContext} from 'react'
import Item from './Item'
import Scrollbar from 'react-smooth-scrollbar';
import { CartContext } from './Cart';
const ShoppingCart = () => {
    const {item,totalItem,totalAmount} = useContext(CartContext );
    return (
        <>
            <div className="container mt-2" style={{backgroundColor:"#eee"}}>
                <div className="row  d-flex  justify-content-center">
                    <div className="col-10  my-2" >
                        <div className="row" >
                            <div className="col-12 box mx-auto  p-5" style={{backgroundColor:"#fff"}}>
                                {totalItem>0?(<>
                                     <p>You have {totalItem} items in the <i style={{fontSize:"2rem"}} className="fas fa-shopping-cart"></i></p>
                                     <div className="heading d-flex justify-content-between align-items-center">
                                             <h4>Shopping Cart</h4>
                                             <h5>Price</h5>
                                     </div>
                                     <hr />
                                     <div className="main-content" >
                                         <div className="row gy-3 d-flex flex-column justify-content-center">
                                         <Scrollbar style={{height:"400px"}}>
                                             {item.map((elem,idx)=>{
                                                 const {id}=elem;
                                                 return(
                                                         <Item key={id} {...elem}/>
                                                 );
                                             })}
                                             </Scrollbar>
                                         </div>
                                         
                                     </div>
                                     <div className="mt-3 d-flex justify-content-end">
                                         <p className="px-2">Subtotal ({totalItem})</p>
                                         <p><i className="fas fa-rupee-sign" ></i> {totalAmount}</p>
                                     </div>
                                     </>
                                ):
                                (<p>Your <i className="fas fa-shopping-cart" style={{fontSize:"2rem"}}></i> is empty</p>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShoppingCart
