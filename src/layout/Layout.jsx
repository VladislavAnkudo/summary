import {Header} from '../component/Header'
import {Preloader} from '../component/Preloader'
import {Outlet} from 'react-router-dom';
import {useState, useEffect} from 'react'
const Layout = () =>{
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Simulate a delay to mimic content loading (replace this with your actual data fetching)
      const delay = 2500;
      setTimeout(() => {
        setIsLoading(false);
      }, delay);
    }, []);

    // Hide the preloader once loading is complete
    useEffect(() => {
      const preloader = document.getElementById('preloader');
      if (!isLoading && preloader) {
        preloader.style.display = 'none';
      }
    }, [isLoading]);
    return (
        
        <>
        {isLoading && (
            <div id="preloader" className="preloader">
                <Preloader/>
            </div>
        )}
        {!isLoading && (
            <div>
                <Header/>
                <main className='main'>
                    <Outlet/>
                </main>
            </div>
        )}
        </>
    )
}
export {Layout}