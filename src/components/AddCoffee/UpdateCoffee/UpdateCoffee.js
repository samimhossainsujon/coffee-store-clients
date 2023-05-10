import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste,
        category, details, photo } = coffee;
    console.log(_id);

    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, quantity, supplier, taste, category,
             details, photo };

        console.log(updatedCoffee);

        // send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
            .catch(err => {
                console.error(err);
                Swal.fire({
                    title: 'Error!',
                    text: 'An error occurred while updating the coffee.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            });


    };

    return (
        <div className='bg-[#c7af66] p-24'>
            <h2 className='text-3xl font-extrabold text-center'>Update Coffee {name}</h2>
            <form onSubmit={handleUpdateCoffee}>
                {/* form row */}
                <div className='md:flex mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label>
                            <input type="text" name='name' defaultValue={name} placeholder="Coffee Name"
                                className="input input-bordered w-full" />
                        </label>
                    </div>


                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label>
                            {/* <span>Name</span> */}
                            <input type="number" name='quantity' defaultValue={quantity} placeholder="Available Quantity"
                                className="input input-bordered w-full ml-4" />
                        </label>
                    </div>
                </div>

                {/* form supplier text  row */}
                <div className='md:flex mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier Name</span>
                        </label>
                        <label>

                            <input type="text" name='supplier' defaultValue={supplier} placeholder="Supplier Name"
                                className="input input-bordered w-full" />
                        </label>
                    </div>


                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">taste</span>
                        </label>
                        <label>
                            {/* <span>Name</span> */}
                            <input type="text" name='taste' defaultValue={taste} placeholder="taste"
                                className="input input-bordered w-full ml-4" />
                        </label>
                    </div>
                </div>


                {/* form category and details row */}
                <div className='md:flex mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label>

                            <input type="text" name='category' defaultValue={category} placeholder="Category"
                                className="input input-bordered w-full" />
                        </label>
                    </div>


                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category Details</span>
                        </label>
                        <label>
                            {/* <span>Name</span> */}
                            <input type="text" name='details' defaultValue={details} placeholder="Category Details"
                                className="input input-bordered w-full ml-4" />
                        </label>
                    </div>
                </div>



                {/* form Photo usr row */}
                <div className='mb-8'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <label>

                            <input type="text" name='photo' defaultValue={photo} placeholder="Photo Url"
                                className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>


                {/* form submit row */}
                <input type='submit' value="Update Coffee" className='btn btn-block' />



            </form>
        </div>
    );
};

export default UpdateCoffee;