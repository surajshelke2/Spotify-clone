import React, { useContext } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';

type SongsItemProps = {
  image: string;
  name: string;
  desc: string;
  id: string | number | any; 
};

const SongsItem: React.FC<SongsItemProps> = ({ image, name, desc, id }) => {
  const context= useContext(PlayerContext) ;


  if (!context) {
    throw new Error('playWithId function is not defined in PlayerContext');
  }

  const {playWithId} = context;

  return (
    <div onClick={() => playWithId(id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
      <img className='rounded' src={image} alt={name} />
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  );
};

export default SongsItem;
