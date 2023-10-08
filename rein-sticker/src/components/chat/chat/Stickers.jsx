import {useContext} from 'react'
import './Stickers.css'
import {GrClose} from 'react-icons/gr';
import { AccountContext } from '../../../context/AccountProvider';

const Stickers = ({setReady,setIsimage,sendText,isimage}) => {

    const {stickers}=useContext(AccountContext)
    
    const handleClick=async (sticker)=>{
        setIsimage(true);
        console.log(isimage);
        setReady(false);
        await sendText(sticker)    
    }

  return (

    <div className='stickers-container'>
            <div className="icon">
               <GrClose onClick={()=>setReady(false)} className='inner-container'></GrClose>
            </div>
            <div className="sticky-images">
               {
                 stickers.map((sticker)=>{
                    return(
                        <img className='sticker-container-images' src={sticker.Image} onClick={()=>handleClick(sticker)} alt="sticker" />
                    )
                 })
               }
            </div> 
    </div>
  )
}

export default Stickers
   