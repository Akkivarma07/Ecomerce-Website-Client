import Product from './Product'
import {useState,useEffect} from 'react'
import {useSelector} from 'react-redux'

const Home = ({setContent}) => {

    const items = useSelector ((state) => state.selected.selectedItems);
    const url = "https://fakestoreapi.com/products";
    const [Products,setProducts] = useState([]);

    async function fetchData () {
        let response = await fetch(url);
        const data = await response.json();
        setProducts(data);
        setContent(data);
    }

    useEffect(() =>{
        fetchData();
    },[]);

    return (
        <div className="flex wrap flex-col mt-[6rem] w-10/12 mx-auto justify-between items-center ">
            {/* {taken === true &&
                <div>Item taken</div>
            } */}
            <div className='flex gap-[1.25rem] flex-wrap mx-auto justify-center mt-[2rem] pb-8 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1'>
                {
                    Products.map((product,key) => (<Product product={product} key={key} taken={items.indexOf(product.id) > -1 ? true: false}/>))
                }
            </div>
        </div>
    );
}

export default Home;