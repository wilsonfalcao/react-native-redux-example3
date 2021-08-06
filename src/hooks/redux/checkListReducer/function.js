import { useDispatch,useSelector } from 'react-redux';

export default() => {

    const dispatch = useDispatch();

    const state = useSelector(state=>state.CheckList);
    
    const additem = (inputItem) =>{
        dispatch({
            type:"ADD",
            item:{
                id:Date.now(),
                title:inputItem,
                check:false,
            }
        });
    }

    const checkitem = (id) =>{
        dispatch({
            type:"CHECK",
            id:id,
        });
    }

    const removeitem = (id) =>{
        dispatch({
            type:"REMOVE",
            id:id,
        });
    }

    return [state, additem, checkitem, removeitem];
}