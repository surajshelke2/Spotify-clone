
import { albumsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import Navbar from './Navbar'

const DisplayHome = () => {
  return (
    <>
      <Navbar/>
      <div className="mb-4">
        <h1 className='my-5 font-bold  text-2xl'>Featured Charts</h1>
        <div className="flex overflow-auto">
        {albumsData.map((item,index)=>(
            <AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}></AlbumItem>
        ))}
        </div>
      </div>

      <div className="mb-4">
        <h1 className='my-5 font-bold  text-2xl'>Today's biggest hits</h1>
        <div className="flex overflow-auto">
        {/* {songsData.map((item,index)=>(
            <AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}></AlbumItem>
        ))} */}
        </div>
      </div>

    </>
  )
}

export default DisplayHome
