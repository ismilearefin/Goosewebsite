import '../Footer/Footer.css';
import { AiFillTwitterSquare,AiFillGoogleSquare,AiFillFacebook } from 'react-icons/ai';

export default function Footer() {
  return (
    <div className='Footer p-4'>
        <div className='d-flex flex-lg-column align-items-center justify-content-center'>
          <div className='w-50 d-lg-flex justify-content-evenly'> 
          <a className='buttonFooter text-white mb-2 d-block'>Audits</a>
          <a className='buttonFooter text-white d-block mb-2'>Live</a>
          <a className='buttonFooter text-white d-block mb-2'>WhitePaper</a>
          </div>
          <div>
          <div className='d-flex justify-content-center footerIcons'>
            <AiFillFacebook/>
            <AiFillTwitterSquare/>
            <AiFillGoogleSquare/>
            <AiFillTwitterSquare/>
          </div>
          <p className='text-center fs-4 text-white mt-2 mt-md-5'>© Goose Wealth Creation All Rights reserved</p>
          </div>
        </div>
    </div>
  )
}
