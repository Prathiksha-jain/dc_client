import React from 'react';
import '../index.css';

const Mainpage = () => {
  return (
    
    <div className="row" style={{ paddingBottom: "10px", margin: "0px", backgroundImage: "url(https://kettocdn.gumlet.io/media/banner/0/71/image/626a109be777492340e46d013c3cad0857a5da3a.png?w=1536&dpr=1.0)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "fixed" }}>
      <div className='col-lg-6 col-md-6 col-sm-12'></div>
      <div className='col-lg-6 col-md-6 col-sm-12' style={{ padding: "25px" }}>
        <h3 class=" fw-bold text-body-emphasis mt-4 mb-3">
          Need Funds to Pay For a Medical Emergency or Social Cause?
        </h3>
        <div className="lead" style={{ paddingTop: "20px" }}>
          <div className="raised-wrapper">
            <h3 className="d-block d-lg-none d-md-none d-sm-none community">Join the community</h3>
            <div className="d-flex flex-wrap align-items-center">
              <div className="inline-div me-4">
                <h3 className="m-0" style={{ color: "#0892d0" }}>0%</h3>
                <span style={{ fontWeight: "700", fontSize:"80%",color:"#999",textTransform:"uppercase"}}>Platform Fee</span>
              </div>
              <div className="inline-div me-4">
                <h3 className="m-0" style={{ color: "#0892d0" }}>72 Lakh+</h3>
                <span style={{ fontWeight: "700",fontSize:"80%", color:"#999",textTransform:"uppercase"}}>Donors</span>
              </div>
              <div className="inline-div">
                <h3 className="m-0" style={{ color: "#0892d0" }}>3.2 Lakh+</h3>
                <span style={{ fontWeight: "700", fontSize:"80%",color:"#999",textTransform:"uppercase"}}>Fundraisers</span>
              </div>
            </div>
          </div>
          <div className="ketto-platform-fee mt-3">
            Ketto’s <strong>0%</strong> Platform fees ensures maximum funds for you
          </div>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start" style={{ paddingTop: "25px" }}>
          <button type="button" style={{ backgroundColor: "#0892d0" ,color:"white"}}class="btn btn-lg px-4 me-md-2">Primary</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;