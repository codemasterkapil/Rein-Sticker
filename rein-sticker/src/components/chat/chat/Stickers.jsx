import { useContext ,React} from 'react'
import './Stickers.css'
import { GrClose } from 'react-icons/gr';
import { AccountContext } from '../../../context/AccountProvider';

const Stickers = ({ setReady, setIsimage, sendText, isimage }) => {

  const { stickers } = useContext(AccountContext)

  const handleClick = async (sticker) => {
    setIsimage(true);
    console.log(isimage);
    setReady(false);
    await sendText(sticker)
  }

  return (

    <div className='stickers-container'>
      <div className="icon">
        <GrClose onClick={() => setReady(false)} className='inner-container' style={{cursor:'pointer'}}></GrClose>
      </div>
      <div className="sticky-images">
        {stickers.map((sticker) => (
          <>
            {sticker.Image.startsWith('http') ? (
              // If it's a link, use it directly
              <img src={sticker.Image} alt="Link" className='sticker-container-images' onClick={()=>handleClick(sticker)} style={{cursor:'pointer'}} />
            ) : (
              // If it's a base64 string, set it as the source
              <img src={`data:image/png;base64,${sticker.Image}`} alt="Base64" className='sticker-container-images' onClick={()=>handleClick(sticker)} style={{cursor:'pointer'}}/>
            )}
          </>
        ))}
      </div>

    </div>
  )
}

export default Stickers
