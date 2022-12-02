import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const AddPackages = () => {
    const navigate = useNavigate

    //console.log(imagebbHost)
    const handleAddPackage = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const description = form.description.value;
        const destination = form.destination.value;
        const image = form.image.value;


        const addpackages = {
            PackageName: name,
            price,
            description,
            destination,
            image

        }
        // save packages
        fetch('https://b6a11-service-review-server-side-fahima01-fahima01.vercel.app/userPackage', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(addpackages)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success("Your Package is added succesfully !!")
                form.reset();
                navigate('/')
            })

    }




    return (
        <div className="hero min-h-auto" style={{ backgroundImage: `url("https://i.ibb.co/1TvpcFG/drif-riadh-Ypku-Rn54y4w-unsplash.jpg")` }}>
            <div className="hero-overlay bg-black bg-opacity-60"></div>
            <div className="hero-content w-2/4 text-center my-12 bg-slate-500 rounded-md ">
                <form onSubmit={handleAddPackage} className='w-full card-body' >
                    <h1 className="text-4xl text-center font-bold text-white">Add a Package</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg text-white font-semibold">Package name:</span>
                        </label>
                        <input type="text" name='name' placeholder="Package name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white font-semibold">Price</span>
                        </label>
                        <input type="number" name='price' placeholder="price" className="input input-bordered" required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-white font-semibold">description</span>
                        </label>
                        <input type="text" name='description' required placeholder="Type here" className="input input-bordered w-full h-24" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-white font-semibold">Destination</span>
                        </label>
                        <input type="text" name='destination' required placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <label className="label">
                        <span className="label-text text-white font-semibold">Photo url</span>
                    </label>
                    <input type="text" required name='image' className="input input-bordered w-full" />
                    <div className="form-control mt-6">

                        <input type="submit" value="Add" style={{ border: 'none' }} className="btn bg-emerald-500 " />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPackages;