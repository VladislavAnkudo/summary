import {Header} from '../component/Header'
import {Outlet} from 'react-router-dom';

const Layout = () =>{
    return (
        <>
        <Header/>
            <main className='main'>
                <Outlet/>
            </main>
        
        </>
    )
}
export {Layout}