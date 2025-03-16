import React from 'react'

const LocationSearchPanel = (props) => {


  const location = [
    "24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal",
    "24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal",
    "24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal",
    "24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal",
  ];

  return (
    <div>
      {
        location.map(function(element, index) {
          return (
            <div 
            onClick={() => { 
              props.setVehiclePanelOpen(true);
              props.setpanelOpen(false); 
            }} 
            key={index}
            className='flex gap-4 border-2 p-3 rounded-sm border-[#eee] active:border-black items-center justify-start my-2'>
              <h2 className='bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full'><i className="ri-map-pin-2-fill"></i></h2>
              <h4 className='font-medium'>{element}</h4>
            </div>
          );
        })
      }
    </div>
  );
}

export default LocationSearchPanel