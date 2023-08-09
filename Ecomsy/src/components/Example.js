import {increment,decrement,addChar,deleteChar} from '../slices/CounterSlice'
import {useSelector,useDispatch} from 'react-redux'
import {useEffect} from 'react'

const Example = () => {

    const count = useSelector((state) => state.counter.value );
    const text = useSelector((state) => state.counter.currName);
    const dispatch = useDispatch();
    const name = "Jay Sandeep Chatpalliwar";
    const i = useSelector((state) => state.counter.i);
    const flag = useSelector((state) => state.counter.flag);

    const x = name[i];

    function display() {

        if(flag){
            setTimeout(() => dispatch(addChar(x)),400);
        }

        else{
            setTimeout(() => dispatch(deleteChar()),400);
        }

    }

    useEffect( () => {
        display();
    },[i,flag]);

    return (
        <div className='flex flex-col w-screen justify-center items-center'>
            <div className="flex w-[210px] h-[60px] mx-auto my-auto mt-[18rem] justify-center items-center gap-[3rem] text-4xl p-[0.5rem] border-2 border-slate-900">
                <div className="cursor-pointer font-bold border-r-2 border-slate-900 pr-2 select-none" onClick={() => dispatch(increment())}>+</div>
                <div className='p-2'>{count}</div>
                <div className="cursor-pointer font-bold border-l-2 border-slate-900 pl-2 select-none" onClick={() => dispatch(decrement())}>-</div>
            </div>
                <div className='flex'>
                    <div>{text}</div>
                    <span className='box'></span>
                </div>

        </div>
        
    )
}

export default Example