import {useSelector} from 'react-redux'
import CartItem from './CartItem';
import Product from './Product';
import {useState} from 'react'
import {NavLink} from 'react-router-dom'

const Cart = ({content}) => {
    const items = useSelector((state) => state.selected.selectedItems);
    let value = 0;

    let selectedItems = [];
    for(let i = 0; i < content.length; i++) {
        let index = items.indexOf(content[i].id);

        if(index > -1){
            selectedItems.push(content[i]);
            value += content[i].price;
        }
    }

    // console.log(selectedItems);
    return (
        <div className='flex flex-row justify-between items-stretch w-9/12 mx-auto mt-[6rem]'>
            {selectedItems.length === 0 &&
                <div className='m-4 flex flex-col gap-[2rem] justify-center items-center w-screen h-[70vh] scroll-m-40'>
                <div className='text-3xl text-iznc-800'>Your Cart is Empty!</div>
                <span className='py-[0.5rem] px-[1rem] rounded-md text-xl duration-500 border-[2px] border-green-600 hover:text-green-600 hover:bg-white bg-green-600 text-white'><NavLink to='/'>Shop Now</NavLink></span>
                </div>
            }

            {selectedItems.length !== 0 && 
                <div className='w-screen flex justify-between gap-8 items-center'>

                <div className='flex gap-[0.5rem] flex-col'>
                {/* <div className='absolute h-[15px] w-[15px] text-white text-[10px] bg-green-600 rounded-full top-0 right-0 flex justify-center items-center'>{selectedItems.length}</div> */}
                {
                    selectedItems.map((product,key) => (<CartItem product={product} key={key} taken={items.indexOf(product.id) > -1 ? true: false} />))
                }
                </div>

                <div className='h-full flex flex-col justify-between  mt-0 py-[4rem] w-[120%]'>
                    <div className='flex gap-[1rem] flex-col'>
                    <div className='text-2xl text-green-800 font-semibold'>YOUR CART</div>
                    <div className='text-[3rem] text-green-700 -mt-[2rem] font-bold'>SUMMARY</div>
                    <div className='text-xl font-bold text-zinc-700'><span className='text-xl text-zinc-700 font-semibold'>Total Items:</span> {selectedItems.length}</div>
                    </div>

                    <div className='flex flex-col gap-[1rem]'>
                        <div className='text-xl text-zinc-700 font-semibold'>Total Amount: <span className='text-xl font-bold text-black'>$ {value.toFixed(2)}</span></div>
                        <button className='w-[500px] bg-green-600 text-white flex justify-center items-center py-[1rem] rounded-lg text-xl font-bold tracking-wide border-[2px] border-green-600 duration-500 hover:bg-white hover:text-green-600'>Checkout Now</button>
                    </div>
                </div>

            </div>
            }
        </div>
    )
}

export default Cart