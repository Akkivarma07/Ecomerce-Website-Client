import {AiFillDelete} from 'react-icons/ai'
import {add,remove,removeAll} from '../slices/selectedSlice'
import { useSelector, useDispatch } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast';
import {useState} from 'react'

const CartItem = ({product,taken}) => {


    const dispatch = useDispatch();
    function handleClick(id) {

        toast.error("Removed from Cart!");
        setTimeout(() => dispatch(remove(parseInt(id))),20 );
        // dispatch(removeAll());
        // setToShow(false);
        // console.log(items);
    }

    return (
        <div className='flex w-[600px] gap-[4rem] max-h-[500px] border-b-[2.5px] pb-6 px-[0.5rem] border-b-zinc-500 mb-[2rem]'>
            <img src={product.image} width='160rem' className='min-h-[10rem] object-contain'></img>
            <div className='flex flex-col justify-between items-center gap-[2rem] mt-[1rem]'>
                <div className='text-[1.2rem] font-semibold text-zinc-700'>{product.title}</div>
                <div className=' text-zinc-500'>{product.description}</div>
                <div className='flex w-full justify-between items-center px-[1rem]'>
                    <div className='text-green-600 font-semibold text-xl'>$ {product.price}</div>
                    {taken === true &&
                        <AiFillDelete className='text-red-700 p-[0.75rem] bg-red-200 cursor-pointer rounded-full text-[2.5rem]' onClick={() => handleClick(product.id)}/>}
                    {taken === false &&
                        <AiFillDelete className='text-red-200 p-[0.75rem] bg-red-700 cursor-pointer rounded-full text-[2.5rem]'/>}
                </div>
            </div>
        </div>
    )
}

export default CartItem;