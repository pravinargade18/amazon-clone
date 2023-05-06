
import axios from "axios";
import { useEffect, useState } from "react";
import {AiFillStar} from 'react-icons/ai'
import { GoGitCompare } from "react-icons/go";
import { IoMdCart } from "react-icons/io";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { MdOutlineFavorite } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/amazonSlice";

const Products = () => {
    const [productData,setProductData]=useState([]);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        const getProducts=async ()=>{
            const {data}=await axios.get('https://fakestoreapi.com/products');
            setProductData(data);
        }
        getProducts();
    },[])

    const addToCartHandler=(item)=>{
        dispatch(addToCart({
          id:item.id,
          title:item.title,
          description:item.description,
          price:item.price,
          category:item.category,
          image:item.image,
          quantity:1
        }))
    }
    
  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-4 gap-10 px-4">
      {productData.map((item) => (
        <div
          key={item.id}
          className="bg-white h-auto border-[1px] border-gray-200 py-8 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative cursor-pointer flex flex-col gap-4 rounded-md"
        >
          <span className="capitalize  text-sm text-gray-500 absolute top-2 right-2">
            {item.category}
          </span>
          <div className="w-full h-auto flex items-center justify-center relative group">
            <img
              className="w-52 h-64 object-contain"
              src={item.image}
              alt="product"
            />
            <ul className="w-full h-36 bg-gray-100 absolute duration-700 flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r bottom-[-170px] group-hover:bottom-0">
              {/* <li>compare <span><IoGitCompare/></span></li> */}
              <li className="productLi">
                Compare
                <span>
                  <GoGitCompare />
                </span>
              </li>
              <li className="productLi">
                Add to Cart
                <span>
                  <IoMdCart />
                </span>
              </li>
              <li className="productLi">
                View Details
                <span>
                  <BsFillArrowRightCircleFill />
                </span>
              </li>
              <li className="productLi">
                Add to Wishlist
                <span>
                  <MdOutlineFavorite />
                </span>
              </li>
            </ul>
          </div>
          <div className="px-4 bg-white z-20">
            <div className="flex items-center justify-between">
              <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue font-medium">
                {item.title.substring(0, 20)}
              </h2>
              <p className="text-sm text-gray-600 font-semibold">
                ${item.price}
              </p>
            </div>
            <div>
              <p className="text-sm mb-1">
                {item.description.substring(0, 100)}
                ...
              </p>
              <div className="text-yellow-500 flex gap-0.5">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
            <button
              onClick={() => addToCartHandler(item)}
              // onClick={() =>
              //   dispatch(
              //     addToCart({
              //       id: item.id,
              //       title: item.title,
              //       description: item.description,
              //       price: item.price,
              //       category: item.category,
              //       image: item.image,
              //       quantity: 1,
              //     })
              //   )
              // }
              className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 hover:from-yellow-300 hover:to-yellow-500 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;

// export async function loader() {
//   const response = await axios.get("https://fakestoreapi.com/products");
//   const data = response.data; // Extract the products array from the response
//   return { data }; // Return an object with the products array as a property
// }
