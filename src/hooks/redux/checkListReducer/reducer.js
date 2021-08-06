const Reducer = (state=[], action) =>{

    switch(action.type){
        case 'ADD':
            return [...state,action.item];
        case 'CHECK': 
            return state.map(item =>{
                if(item.id === action.id){
                    return {...item,check: !item.check}
                }else{
                    return item;
                }
            });
        case 'REMOVE': 
            return state.filter(item =>{
                return item.id != action.id;
            });
        default :
            return state;
    }
}

export default Reducer;
