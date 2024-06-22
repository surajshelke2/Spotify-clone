import React from 'react'

type SongsItemProps = {
    image: string;
    name: string;
    desc: string;
    id: string | number; 
  };

const SongsItem:React.FC<SongsItemProps> = ({ image, name, desc, id }) => {
  return (
    <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
      <img className='rounded' src={image} alt={name} />
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default SongsItem






