import React, { useEffect, useState } from 'react'
import { useNavigate, useParams,  } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';

const Doctors = () => {

  const { speciality } = useParams();
  
  const {doctors}=useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);
  const[showFilter, setShowFilter]=useState(false);
  const navigate= useNavigate();

  const applyFilter=()=>{
    if(speciality){
      setFilterDoc(doctors.filter(doc=> doc.speciality=== speciality ))
    }else{
      setFilterDoc(doctors)
    }
  }

  useEffect(()=>{
    applyFilter();
  },[doctors,speciality])
  return (
    <div>
      <p className='text-gray-600 '>Browse through the doctors specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`px-1 py-3 border rounded text-sm transition-all sm:hidden ${showFilter?'bg-primary text-white':''}` } onClick={()=>setShowFilter(prev=> !prev)}>Filters</button>
        <div className={` flex-col gap-4 text-sm text-gray-600 ${ showFilter ?'flex':'hidden sm:flex'}`}>
          <p onClick={()=> { if (speciality ==='General physician') {navigate('/doctors')}else{navigate('/doctors/General physician')} } }className = {'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${speciality === "General physician" ? " bg-indigo-100 text-black" : " "}' }>General physician</p>
          <p onClick={()=> {if(speciality==='Gynecologist'){navigate('/doctors')}else{navigate('/doctors/Gynecologist')}}} className = {'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gynecologist" ? " bg-indigo-100 text-black" : ""} '}>Gynecologist</p>
          <p onClick={()=> {if(speciality==='Dermatologist'){navigate('/doctors')}else{navigate('/doctors/Dermatologist')}}} className = {'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Dermatologist" ? " bg-indigo-100 text-black" : ""} '}>Dermatologist</p>
          <p onClick={()=> {if(speciality==='Pediatricians'){navigate('/doctors')}else{navigate('/doctors/Pediatricians')}}} className = {'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Pediatricians" ? " bg-indigo-100 text-black" : ""}' }>Pediatricians</p>
          <p onClick={()=> {if(speciality==='Neurologist'){navigate('/doctors')}else{navigate('/doctors/Neurologist')}}} className = {'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Neurologist" ? " bg-indigo-100 text-black" : ""}' }>Neurologist</p>
          <p onClick={()=> {if(speciality==='Gastroenterologist'){navigate('/doctors')}else{navigate('/doctors/Gastroenterologist')}}} className = {'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gastroenterologist" ? " bg-indigo-100 text-black" : ""}' }>Gastroenterologist</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterDoc.map((item,index)=>(
              <div  onClick={()=> navigate(`/appointment/${item._id}`)} key={index} className='border border-blue-200 rounded-xl overflow-hidden cursor-point hover:translate-y-[-10px] trasition-all duration-500'>
                <img className='bg-blue-50 'src={item.image} alt="" />
                <div className='p-4'>
                  <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500':'text-gray-500'} `}>
                    <p className={`w-2 h-2 ${item.available ?'bg-green-500 ' : 'bg-gray-500 '} rounded-full`} ></p><p>{item.available ? 'Available' : 'Not Available'}</p>
                  </div>
                   <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                   <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
            </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
export default Doctors
