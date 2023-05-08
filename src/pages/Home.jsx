import { useEffect } from 'react';
import HeroBanner from '../components/hero/HeroBanner';
import Products from '../components/hero/Products';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../firebase.config';
import { setUserInfo } from '../store/authSlice';
import { useDispatch } from 'react-redux';
const Home = () => {
  const dispatch=useDispatch();

   useEffect(() => {
    
     const auth = getAuth(app);
     onAuthStateChanged(auth, (user) => {
       if (user) {
            dispatch(
              setUserInfo({
                id: user.uid,
                username: user.displayName,
                email: user.email,
                image: user.photoURL,
              })
            );
       }
       
     });
   }, [dispatch]);
  
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