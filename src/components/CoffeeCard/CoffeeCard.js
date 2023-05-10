import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee,coffees,setCoffees }) => {
    const { _id, name, quantity, supplier, taste,
        category, details, photo } = coffee;

    const handelDeleted = _id => {
        console.log(_id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE',



                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const  remaining = coffees.filter(coffee=>coffee._id !==_id);
                            setCoffees(remaining)
                        }
                    })

            }
        })

    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex justify-between w-full pr-5">
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p>Quantity: {quantity}</p>
                    <p>{supplier}</p>
                    <p>Name: {name}</p>
                </div>

                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn btn-outline btn-secondary">View</button>
                        <Link to={`updateCoffee/${_id}`}>
                            <button className="btn btn-outline btn-secondary">Edit</button>
                        </Link>
                        <button
                            onClick={() => handelDeleted(_id)}
                            className="btn btn-outline btn-secondary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;