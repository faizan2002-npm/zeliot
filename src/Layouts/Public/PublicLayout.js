import { useEffect, useState } from 'react';
import { Header } from './../../Components/Public/Header';
import { Footer } from './../../Components/Public/Footer';
import { Loader } from './../../Components/Public/Loader';
import "bootstrap/dist/css/bootstrap.min.css";
import "./../../Assets/css/style.scss";

const PublicLayout = ({ children }) => {
    const [Loading, setLoading] = useState(false);
    const adjuster = () => {
        document.getElementById("main").style.paddingTop = `${document.getElementById("header").offsetHeight}px`;
        document.addEventListener("DOMContentLoaded", function (event) {
            document.getElementById("main").style.paddingTop = `${document.getElementById("header").offsetHeight}px`;
        });
        window.addEventListener('resize', function (event) {
            document.getElementById("main").style.paddingTop = `${document.getElementById("header").offsetHeight}px`;
        }, true);
    }
    useEffect(() => {
        adjuster();
        setTimeout(() => {
            setLoading(false)
        }, 4000);
    }, [])
    return (
        <>
            {
                Loading ? <>
                    <Header />
                    <main id="main" className="p-0">
                        <Loader />
                    </main>
                </> : <>
                    <Header />
                    <main id="main">
                        {children}
                    </main>
                    <Footer />
                </>
            }

        </>
    )
}

export default PublicLayout