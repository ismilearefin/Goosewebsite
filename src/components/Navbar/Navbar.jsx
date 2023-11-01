import '../Navbar/Navbar.css';
import logo from '../../assets/logo.svg';
import discord from '../../assets/discord.svg';
import { AiFillTwitterCircle,AiOutlineClose } from 'react-icons/ai';
import { SiOpensea } from 'react-icons/si';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';


export default function Navbar() {
    const [isClick, setIsClick] = useState(false);
  return (
    <div className='bg-transparent px-3 px-lg-5 pt-2'>
        <nav className='d-none d-lg-block d-xxl-flex justify-content-between'>
            <div className='d-flex justify-content-md-center '>
            <img src={logo} alt='Logo'  width={150}/>
            </div>
            {/* justify-content-xl-end */}
            <div className='d-flex  justify-content-lg-evenly justify-content-xxl-end  mt-2 mt-xl-0 col-xxl-8' >
                
                <div className='d-md-flex w-auto align-items-center justify-content-md-around  justify-content-xxl-end col-lg-3 col-xl-7 col'>
                    <a href='/' className='routeLink'>Audits</a>
                    <a href='/' className='routeLink'>Live</a>
                    <a href='/' className='routeLink'>WhitePaper</a>
                </div>
                <div className='iconBox col-2 d-flex align-items-center ml-sm-4 col'>
                    <a><SiOpensea className='IconsNavbar'/></a>
                    <a><AiFillTwitterCircle className='IconsNavbar'/></a>
                    <a className=''><img src={discord} alt='discord'/></a>
                </div>
                <div className='col-3 d-flex align-items-center col'>
                    <button className='walletButoon'>Connect Wallet</button>
                </div>

            </div>
        </nav>
        {/* Mobile device Navbar */}
        <div className='d-flex d-lg-none align-items-center justify-content-between position-relative pt-2'>
        <div className='d-flex justify-content-md-center '>
            <img src={logo} alt='Logo'  width={150}/>
        </div>
        <div>
            {
                !isClick ? (

                    <GiHamburgerMenu className='IconsNavbar' onClick={() => setIsClick(!isClick)}/>
                ):(

                    <AiOutlineClose className='IconsNavbar' onClick={() => setIsClick(!isClick)}/>
                )
            }
        </div>
        {/* After click Hamburger */}
        {
            isClick && (
                <nav className='responsiveNavbar w-100 border px-3 py-5 position-absolute z-1'>
        <div className='' >
                
                <div className='px-4 text-center'>
                    <a href='/' className='d-block fs-3 py-4 my-3 border-bottom'>Audits</a>
                    <a href='/' className='d-block py-4 fs-3 my-3 border-bottom'>Live</a>
                    <a href='/' className='d-block py-4 fs-3 my-3 border-bottom' >WhitePaper</a>
                </div>
                
                <div className='iconBox text-center px-4 my-4'>
                    <a><SiOpensea className='IconsNavbar'/></a>
                    <a><AiFillTwitterCircle className='IconsNavbar'/></a>
                    <a className=''><img src={discord} alt='discord'/></a>
                </div>
                <div className='d-block px-4'>
                    <button className='walletButoonResponsive fs-3'>Connect Wallet</button>
                </div>
                

            </div>
        </nav>
            )
        }
        </div>
        
    </div>
  )
}
