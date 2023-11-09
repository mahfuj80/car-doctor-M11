// import { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import useServices from '../../../hooks/useServices';
import { useState } from 'react';

// DRY --> Do not Repeat Yourself
const Services = () => {
  const [asc, setAsc] = useState(true);
  const services = useServices(asc);
  // const [services, setServices] = useState([]);

  // useEffect(() => {
  //   fetch(`https://car-doctor-server-ten-gilt.vercel.app/services?sort=${asc?'asc':'desc'}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setServices(data);
  //     });
  // }, []);
  return (
    <div className="py-16">
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
        <h2 className="text-5xl">Our Service Area</h2>
        <p className="lg:w-1/2 mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.
        </p>
        <button onClick={() => setAsc(!asc)} className="btn btn-secondary">
          {asc ? 'Price: High to Low' : 'Price: Low to High'}
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services?.map((service) => (
            <ServiceCard key={service?._id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
