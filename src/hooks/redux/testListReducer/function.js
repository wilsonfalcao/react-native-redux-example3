import { useDispatch,useSelector } from 'react-redux';

export default() => {

    const dispatch = useDispatch();

    const state = useSelector(state=>state.CheckList2);

    const additem = (inputItem) =>{
        dispatch({
            type:"ADD2",
            item2:{
                id:Date.now(),
                title:inputItem,
                check:false,
            }
        });
    }

    const checkitem = (id) =>{
        dispatch({
            type:"CHECK2",
            id:id,
        });
    }

    const removeitem = (id) =>{
        dispatch({
            type:"REMOVE2",
            id:id,
        });
    }

    return [state,additem, checkitem, removeitem];
}