import contract from '../../assets/contract.svg';
import investment from '../../assets/investment.svg';
import investor from '../../assets/investor.svg';
import "./Home.css";

export default function Home() {
  return (
    <div className="my-5">
      <h2 className="text-center py-5">Dashboard</h2>
      <div className='px-5 d-xxl-flex dashboardMainDiv align-items-xxl-start'>
{/* Contact section  */}
        <div className='my-5 text-center row justify-content-center'>
          <div className='imageIcon mb-5'><img className='position-absolute icon' src={contract} alt="contact"/></div>
          <p className='HomeText mb-5'>Contact</p>
          <table className='text-white fs-2'>
            <tbody className=''>
              <tr className=''>
                <td>Total investments</td>
                <td>?</td>
              </tr>
              <tr>
                <td>Total profits:</td>
                <td>?</td>
              </tr>
              <tr>
                <td>Total investors:</td>
                <td>?</td>
              </tr>
            </tbody>
          </table>
        </div>
  {/* Investor Section */}
        <div className='my-5 text-center row justify-content-center'>
          <div className='imageIcon mb-5'><img className='position-absolute icon' src={investment} alt="investment"/></div>
          <p className='HomeText mb-5'>Investor</p>
          <table className='text-white fs-2'>
            <tbody className=''>
              <tr className=''>
                <td>Total investments</td>
                <td>?</td>
              </tr>
              <tr>
                <td>Total profits:</td>
                <td>?</td>
              </tr>
              <tr>
                <td>Your available profits:</td>
                <td>?</td>
              </tr>
            </tbody>
          </table>
        </div>
  {/* Invest section      */}
        <div className=' my-5 text-center d-lg-flex align-items-end  justify-content-lg-between  flex-xxl-column '>
          <div className='d-flex flex-column'>
          <div className='imageIcon mb-5 mx-auto'><img className='position-absolute icon' src={investor} alt="investor"/></div>
          <p className='HomeText mb-5'>Invest</p>
          <table className='text-white fs-2'>
            <tbody className=''>
              <tr className=''>
                <td className='InvestorInput'><input className='w-100 p-2' type='number' placeholder='1000'/></td>
                <td><button>Approve Send</button></td>
              </tr>
              <tr className=''>
                <td className='InvestorInput'><input className='w-100 p-2' type='number' placeholder='1000'/></td>
                <td><button>Invest</button></td>
              </tr>
            </tbody>
          </table>
          </div>
        
      <div className='mt-5 d-flex flex-column'>
      <p className='HomeText mb-5'>Withdraw</p>
          <table className='text-white fs-2'>
            <tbody className=''>
              <tr className=''>
                <td className='w-25 withdrowText'>Withdraw profits:</td>
                <td className='d-md-flex '>
                  <button>Withdraw</button>
                  <button>Compound</button>
                
                </td>
              </tr>
            </tbody>
          </table>
      </div>
        
        </div>
      
      </div>

    </div>
  );
}
