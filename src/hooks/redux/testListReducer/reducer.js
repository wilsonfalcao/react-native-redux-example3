const Reducer = (state=[], action) =>{

    switch(action.type){
        case 'ADD2': 
            return [...state, action.item2];
        case 'CHECK2': 
            return state.map(item =>{
                if(item.id === action.id){
                    return {...item,check: !item.check}
                }else{
                    return item;
                }
            });
        case 'REMOVE2': 
            return state.filter(item =>{
                return item.id != action.id;
            });
        default :
            return state;
    }
}

export default Reducer;