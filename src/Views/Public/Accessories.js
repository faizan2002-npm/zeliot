import React, { useState } from 'react'
import AccessoriesCard from '../../Components/Public/AccessoriesCard';
import Images from '../../Constants/Images';
import PublicLayout from './../../Layouts/Public/PublicLayout';

export const Accessories = () => {
    const [Accessories, setAccessories] = useState([
        {
            _id: 1,
            title: "Temperature Sensor",
            image: Images.AccessoriesCardImage1
        },
        {
            _id: 2,
            title: "Panic Button",
            image: Images.AccessoriesCardImage2
        },
        {
            _id: 3,
            title: "Door Sensor",
            image: Images.AccessoriesCardImage3
        },
        {
            _id: 4,
            title: "USB Camera",
            image: Images.AccessoriesCardImage4
        },
        {
            _id: 5,
            title: "IP Camera",
            image: Images.AccessoriesCardImage5
        },
        {
            _id: 6,
            title: "Tyre Pressure Sensor",
            image: Images.AccessoriesCardImage6
        },
        {
            _id: 7,
            title: "Fuel Sensor",
            image: Images.AccessoriesCardImage7
        },
        {
            _id: 8,
            title: "RFID Reader",
            image: Images.AccessoriesCardImage8
        },
        {
            _id: 9,
            title: "Reverse Parking Sensor",
            image: Images.AccessoriesCardImage9
        },
        {
            _id: 10,
            title: "Immobilizer",
            image: Images.AccessoriesCardImage10
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
                                    <a href="#explore" className="btn btn-default">
                                    EXPLORE ACCESSORIES
                                    </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="list bg-white" id="explore">
                <div className="container">
                    <h2 className="text-center">
                        Here’s a list of all the Accessories we support
                    </h2>
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
