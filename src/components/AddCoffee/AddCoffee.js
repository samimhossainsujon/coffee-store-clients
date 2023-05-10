import React from 'react';
import Swal from 'sweetalert2'


const AddCoffee = () => {
    const handelAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {
            name, quantity, supplier, taste,
            category, details, photo
        }
        console.log(newCoffee);

        // send data to server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);

                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee added successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }
            })
            .catch(error => {
                console.log(error);
            })


    }
    return (
        <div className='bg-[#c7af66] p-24'>
            <h2 className='text-3xl font-extrabold text-center'> Add a Coffee </h2>
            <form onSubmit={handelAddCoffee}>
                {/* form row */}
                <div className='md:flex mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label>

                            <input type="text" name='name' placeholder="Coffee Name"
                                className="input input-bordered w-full" />
                        </label>
                    </div>


                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label>
                            {/* <span>Name</span> */}
                            <input type="number" name='quantity' placeholder="Available Quantity"
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

                            <input type="text" name='supplier' placeholder="Supplier Name"
                                className="input input-bordered w-full" />
                        </label>
                    </div>


                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">taste</span>
                        </label>
                        <label>
                            {/* <span>Name</span> */}
                            <input type="text" name='taste' placeholder="taste"
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

                            <input type="text" name='category' placeholder="Category"
                                className="input input-bordered w-full" />
                        </label>
                    </div>


                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category Details</span>
                        </label>
                        <label>
                            {/* <span>Name</span> */}
                            <input type="text" name='details' placeholder="Category Details"
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

                            <input type="text" name='photo' placeholder="Photo Url"
                                className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>


                {/* form submit row */}
                <input type='submit' value="Add Coffee" className='btn btn-block' />



            </form>
        </div>
    );
};

export default AddCoffee;