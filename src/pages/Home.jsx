import Banner from '../components/home/HeroBanner';
import Products from '../components/home/Products';
const Home = () => {
  return (
    <>
   <Banner/>
    <div  className="-mt-36 py-6"> 
        <Products/>
    </div>

    </>
  )
}

export default Home;