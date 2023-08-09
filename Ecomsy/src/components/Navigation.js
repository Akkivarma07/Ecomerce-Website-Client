import {FaShoppingCart} from 'react-icons/fa'
import logo from '../logo/logo.png'
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'
const Navigation = () => {

    const items = useSelector((state) => state.selected.selectedItems);
    return(
        <div className='flex justify-between items-center bg-slate-900 text-white px-[9rem] h-[5rem] fixed w-screen z-10 -mt-[6rem]'>
            {items.length !== 0 &&
                <NavLink to='/cart'><div className=' ball absolute h-[20px] w-[20px] text-white text-[14px] bg-green-600 rounded-full top-[1.25rem] right-[8.5rem] flex justify-center items-center cursor-pointer z-10'>{items.length}</div></NavLink>
            }

            <NavLink to='/'><img src={logo} width="170rem" className='absolute top-4 left-36' /></NavLink>
            <div className='flex gap-[1.5rem] items-center absolute right-36 top-[1.5rem]'>
                <NavLink to='/' className='duration-200 hover:text-green-600'>Home</NavLink>
                <NavLink to='/cart' className='duration-200 hover:text-green-600 text-2xl'><FaShoppingCart /></NavLink>
            </div>
        </div>
    )
} 

export default Navigation