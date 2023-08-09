import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { add, remove, removeAll } from '../slices/selectedSlice'
import { useSelector, useDispatch } from 'react-redux'
import {FcApproval} from 'react-icons/fc'

const Product = ({ product,taken }) => {
    // desc2.append("...");
    // console.log(desc2);

    const [toShow, setToShow] = useState(false);
    const items = useSelector((state) => state.selected.selectedItems);
    const dispatch = useDispatch();
    const desc = product.description.substring(0, 80) + "...";
    const title = product.title.substring(0, 14) + "...";
    // setToShow("Remove Item");

    function handleClick(id) {

        let index = items.indexOf(id);

        if (index <= -1) {
            toast.success("Added to Cart!");
            dispatch(add(parseInt(id)));
            setToShow(true);
        }

        else {
            toast.error("Removed from Cart!");
            dispatch(remove(parseInt(id)));
            // dispatch(removeAll());
            setToShow(false);
        }

        // console.log(items);
        // console.log(taken);
    }
    return (
        <div className="flex flex-col w-[23%] justify-between gap-4 items-center product rounded-2xl p-4 duration-300 group hover:scale-110 mb-[2rem] relative" id={product.id}>
            {taken === true &&
                <FcApproval className='text-[3.5rem] absolute -top-4 -left-4 text-green-600'/>}
            <div className='text-xl font-semibold text-zinc-700'>{title}</div>
            <div className='text-center text-xs text-zinc-500'>{desc}</div>
            <div><img src={product.image} width='140rem' className='min-h-[10rem] object-contain' /></div>
            <div className='flex w-full justify-between items-center px-2'>
                <div className=' text-green-600 font-semibold'>$ {product.price}</div>

                {taken === true &&
                    <button onClick={() => handleClick(product.id)} className='text-zinc-700 uppercase text-sm font-semibold p-[0.5rem] border-[2px] rounded-full border-zinc-700 py-[0.25rem] group-hover:bg-zinc-700 group-hover:text-white'>Remove Item</button>
                }

                {taken === false &&
                    <button onClick={() => handleClick(product.id)} className='text-zinc-700 uppercase text-sm font-semibold p-[0.5rem] border-[2px] rounded-full border-zinc-700 py-[0.25rem] duration-300 group-hover:bg-zinc-700 group-hover:text-white'>Add to Cart</button>
                }
            </div>
        </div>
    )
}

export default Product