import moneyBag from "../../assets/moneyBag.svg";
import coins1 from "../../assets/coins1.svg";
import coins2 from "../../assets/coins2.svg";
import pig from "../../assets/pig.svg";
import note from "../../assets/note.svg";
import bag from "../../assets/bag.svg";
import ArroImage from "../../components/ArroImage/ArroImage";
import "./Whitepaper.css";

export default function Whitepaper() {
  return (
    <div className="px-xl-5 my-xl-5">
      <div className="mainBox">
        <div>
          {/* GOLEN GOOSE */}
          <div className=" d-flex flex-column-reverse flex-xl-row align-items-center justify-content-between">
            <div className="me-md-5 w-100">
              <p className="text-white fs-4 text-center">Investor</p>
              <div className="imageDiv">
                <img src={moneyBag} alt="investor" width={170} />
              </div>
            </div>
            <h1>GOLEN GOOSE</h1>
          </div>
          <div className=" d-flex justify-content-center d-xl-block">
            <div className="clip-path-topToBottom"></div>
          </div>
          {/* Middle div  start*/}
          <div className="d-xl-flex justify-content-center align-items-center border border-xl-0 p-5">
            <div className="d-none d-md-block">
              <div className="imageDiv">
                <img className="img-fluid" src={pig} alt="pig" width={180} />
              </div>
              <p className="text-white  text-center">
                Profit Generatd with forex trading
              </p>
            </div>
            <div className="d-md-none d-block">
              <p className="text-white fs-4 text-center">Forex Traders</p>
              <div className="imageDiv">
                <img
                  className="img-fluid"
                  src={moneyBag}
                  alt="moneyBag"
                  width={180}
                />
              </div>
            </div>

            <div className=" d-xl-flex align-items-center">
              <div className="text-white p-3 mx-4">
                <p className="text-center">100% Tvl Every Sunday</p>
                <div className="d-flex flex-column align-items-center">
                  <ArroImage></ArroImage>
                  <ArroImage isleft={true}></ArroImage>
                </div>
                <p className="text-center d-none d-xxl-block">
                  All Profit Generated From Monday
                  <br /> To Friday Are Sent On Saturdays
                </p>
              </div>
              <div className="d-md-block d-none">
                <p className="text-white fs-4 text-center">Forex Traders</p>
                <div className="imageDiv">
                  <img className="img-fluid" src={note} alt="pig" width={180} />
                </div>
              </div>
              <div className="d-md-none d-block ">
                <div className="imageDiv">
                  <img className="img-fluid" src={pig} alt="pig" width={180} />
                </div>
                <p className="text-white  text-center">
                  Profit Generatd with forex trading
                </p>
              </div>
            </div>

            <div className=" d-xl-flex align-items-center">
              <div className="text-white p-3 mx-4">
                <div className="d-flex flex-column align-items-center">
                  <ArroImage></ArroImage>
                  <p className="text-center">Trade from Monday To Friday</p>
                  <ArroImage isleft={true}></ArroImage>
                </div>
              </div>
              <div className="imageDiv ">
                <img className="img-fluid" src={bag} alt="bag" width={150} />
              </div>
            </div>
          </div>
          {/* Middle div  end*/}

          <div className="d-flex justify-content-center d-xl-block ">
            <div className="clip-path-topToBottom"></div>
          </div>
          {/* INVESTMENT */}
          <div className=" d-flex flex-column flex-xl-row align-items-center justify-content-between">
            <div className=" w-100 me-md-5  me-md-5  w-md-auto">
              <div className="imageDiv d-flex  ">
                <div className="">
                  <img
                    className="img-fluid"
                    src={coins1}
                    alt="coins1"
                    width={80}
                    height={100}
                  />
                  <p className="text-white text-center">20% Team</p>
                </div>
                <div className="ps-2">
                  <img
                    className="img-fluid"
                    src={coins2}
                    alt="coins2"
                    width={80}
                    height={100}
                  />
                  <p className="text-white text-center">80% Investors</p>
                </div>
              </div>
            </div>
            <h1>INVESTMENT</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
