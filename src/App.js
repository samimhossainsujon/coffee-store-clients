import logo from './logo.svg';
import './App.css';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './components/CoffeeCard/CoffeeCard';
import { useState } from 'react';

function App() {

  const LoadedCoffees = useLoaderData();
  const [coffees, setCoffees]= useState(LoadedCoffees);
  return (
    <div className="m-20">
      <h1 className='text-6xl text-center my-20 text-purple-600'> hot ho cold {coffees.length} </h1>
      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees= {coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>)
        }
      </div>
    </div>
  );
}

export default App;
