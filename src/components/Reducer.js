export const reducer=(state,action)=>{
    if(action.type==="REMOVE_ITEM"){
        let updatedItem=state.item.filter((elem)=>{
            return elem.id!==action.payload;
        });
        return {
            ...state,
            item:updatedItem,
        };
    }
    if(action.type==="INCREMENT_ITEM"){
        let updatedItem=state.item.map((elem)=>{
            if(elem.id===action.payload){
                return {
                    ...elem,
                    quantity:elem.quantity+1,
                };
            }
            return elem;
        });
        return {
            ...state,
            item:updatedItem,
        }
    }
    if(action.type==="DECREMENT_ITEM"){
        let updatedItem=state.item.map((elem)=>{
            if(elem.id===action.payload){
                return {
                    ...elem,
                    quantity:elem.quantity-1,
                };
            }
            return elem;
        }).filter((elem)=>{
            return elem.quantity>0;
        });
        return {
            ...state,
            item:updatedItem,
        }
    }
    if(action.type==="GET_TOTAL"){
        let {totalItem,totalAmount}=state.item.reduce((accum,elem)=>{
            let {quantity,price}=elem;
            accum.totalItem+=quantity;
            accum.totalAmount+=quantity*price;
            return accum;
        },{
            totalAmount:0,
            totalItem:0,
        });
        return{
            ...state,
            totalAmount,
            totalItem,
        };
    }


    return state;
}