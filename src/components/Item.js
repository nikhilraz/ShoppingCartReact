import React,{useContext} from 'react'
import { CartContext } from './Cart';


const Item = ({id,imgUrl,model,color,styleName,patternName,price,quantity}) => {
    const {removeItem,incrementItem,decrementItem}=useContext(CartContext);
    return (
                                 <>
                                    <div className="d-flex justify-content-center">
                                            <div className="image col-lg-4 col-md-4 ">
                                                <img src={imgUrl} alt={model} />
                                            </div>
                                            <div className="col-lg-6 col-md-5  pl-3 about d-flex flex-column">
                                                <div className="model">
                                                    <h5>{model}</h5>
                                                </div>
                                                <p><b>Color: </b>{color}</p>
                                                <p><b>Style name: </b>{styleName}</p>
                                                <p><b>Pattern name: </b>{patternName}</p>
                                                <div className=" d-flex justify-content-start">
                                                    <div className="col-8 d-flex justify-content-start">
                                                        <i className="fas fa-plus mx-1" onClick={()=>incrementItem(id)}></i>
                                                        <input type="text" style={{width:"30px",height:"20px"}}  name="quantity" value={quantity}   />
                                                        <i className="fas fa-minus mx-1" onClick={()=>decrementItem(id)}></i>
                                                    </div>
                                                    <div className="col-4">
                                                        <i className="fas fa-trash" title="Remove" onClick={()=>removeItem(id)}></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-2 col-md-3">
                                                <p><b><i className="fas fa-rupee-sign"></i> {price}</b></p>
                                            </div>
                                         </div>
                                        <hr />
                                        </>
    )
}

export default Item;
