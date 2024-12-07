export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Path2Medicine
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
                <span className="visually-hidden">(current)</span>
              </a>
            </li>
            {/* doctor */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Doctor
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                Show Doctors
                </a>
                <a className="dropdown-item" href="#">
                  Add Doctor
                </a>
               
              </div>
            </li>
            {/* nurse */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Nurse
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                Show Nurses
                </a>
                <a className="dropdown-item" href="#">
                  Add Nurse
                </a>
               
              </div>
            </li>
            {/* Patient */}

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Patient
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
               Show Patients
                </a>
                <a className="dropdown-item" href="#">
                  Add Patient
                </a>
               
              </div>
            </li>
{/* management staff */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Management Staff
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
               Show Management Staff
                </a>
                <a className="dropdown-item" href="#">
                  Add Management Staff
                </a>
               
              </div>
            </li>
            
            {/* Pharmacist */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
               Pharmacist
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
               Show Pharmacist
                </a>
                <a className="dropdown-item" href="#">
                  Add Pharmacist
                </a>
               
              </div>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}