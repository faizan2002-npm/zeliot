import { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from './../../Components/Public/Header';
import { Footer } from './../../Components/Public/Footer';
import { Loader } from './../../Components/Public/Loader';

const PublicLayout = ({ children }) => {
    const [Loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 4000);
    }, [])
    return (
        <>
            {
                Loading ? <>
                    <Header />
                    <main id="main">
                        <Loader />
                    </main>
                </> : <>
                    <Header />
                    <main id="main-content">
                        {children}
                    </main>
                    <Footer />
                </>
            }

        </>
    )
}

export default PublicLayout