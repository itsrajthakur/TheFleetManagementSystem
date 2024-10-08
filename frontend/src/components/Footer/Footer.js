import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <footer className="bg-body-tertiary text-center bg-dark text-success">
        <div className="container p-4">
          <section className="container text-secondary mb-3">
            <img src="image/footer.png" className="footer-img" alt="FleetMaster logo" height={100} /><br />
            <span>Fleet Management System</span>
          </section>
          <section className="mb-4 text-light">
            <p>
              Fleet management refers to all actions that need to take place to keep a fleet running efficiently, on time, and within budget. It is the process used by fleet managers to monitor fleet activities and make decisions about proper asset management, dispatch and routing, and vehicle acquisition and disposal. We help to ensure that a fleet is meeting compliance requirements, continuously improving efficiencies, and reducing costs.
            </p>
          </section>
          <section className="mb-4">
            <div className="row text-info">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase" style={{ cursor: "pointer" }} onClick={() => navigate('/')}>Home</h5>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase" style={{ cursor: "pointer" }} onClick={() => navigate('/about')}>About</h5>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase" style={{ cursor: "pointer" }} onClick={() => navigate('/services')}>Services</h5>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase" style={{ cursor: "pointer" }} onClick={() => navigate('/contact')}>Contact</h5>
              </div>
            </div>
          </section>
        </div>
        <hr className="m-0 p-0 text-light border" />
        <div className="text-center p-3">
          <span className="text-light">© 2024 Copyright: </span>
          <span className="text-reset fw-bold text-light">FleetMaster.com</span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
