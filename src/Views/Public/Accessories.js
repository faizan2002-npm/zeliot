import React,{useState} from 'react'
import AccessoriesCard from '../../Components/Public/AccessoriesCard';
import Images from '../../Constants/Images';
import PublicLayout from './../../Layouts/Public/PublicLayout';

export const Accessories = () => {
    const [Accessories, setAccessories] = useState([
        {
            _id: 1,
            title: "IP Camera",
            image: Images.AccessoriesCardImage
        },
        {
            _id: 2,
            title: "IP Camera",
            image: Images.AccessoriesCardImage
        },
        {
            _id: 3,
            title: "IP Camera",
            image: Images.AccessoriesCardImage
        },
        {
            _id: 4,
            title: "IP Camera",
            image: Images.AccessoriesCardImage
        },
        {
            _id: 5,
            title: "IP Camera",
            image: Images.AccessoriesCardImage
        },
        {
            _id: 6,
            title: "IP Camera",
            image: Images.AccessoriesCardImage
        },
    ])
    return (
        <PublicLayout>
            <section className="Vehicle p-0">
                <div className="box">
                    <div className="container">
                        <div className="self">
                            <h2>
                                Accessories that help us make the Connected <br />
                                Vehicle Ecosystem Possible.
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="list bg-white">
                <div className="container">
                    <div className="row">
                        {
                            Accessories.map((e, index) => (<AccessoriesCard key={`key-${index}-${e._id}`} image={e.image} title={e.title} />))
                        }
                    </div>
                </div>
            </section>
        </PublicLayout>
    )
}
