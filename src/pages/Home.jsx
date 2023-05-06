import HeroBanner from '../components/hero/HeroBanner';
import Products from '../components/home/Products';
const Home = () => {
  return (
    <>
    <HeroBanner/>
    <div  className="-mt-36 py-6"> 
        <Products/>
    </div>

    </>
  )
}

export default Home;