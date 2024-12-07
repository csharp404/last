import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const NurseDetails = ({ nurse }) => {
  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDelete = () => {
    setShowDeleteModal(false);
    alert("nurse deleted successfully!");
    // You can add your delete logic here
    navigate("/nurses"); // Redirect to list or another page
  };

  return (
    <div className="container my-5">
      <div className="card shadow-lg">
        <div className="card-header bg-primary text-white">
          <h2 className="mb-0">Nurse Details</h2>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 mb-4">
              <h5 className="fw-bold">Name:</h5>
              <p>{nurse.name}</p>
            </div>
            <div className="col-md-6 mb-4">
              <h5 className="fw-bold">
                {nurse.message == null ? "Hire Date" : "Admission Date"}:
              </h5>
              <p>{nurse.hireDate || nurse.admissionDate}</p>
            </div>
            <div className="col-md-6 mb-4">
              <h5 className="fw-bold">Department:</h5>
              <p>{nurse.department}</p>
            </div>
            <div className="col-md-6 mb-4">
              <h5 className="fw-bold">
                {nurse.message == null ? "Experience" : "PCD nurse"}:
              </h5>
              <p>{nurse.experience || nurse.pcdnurse}</p>
            </div>
            <div className="col-md-6 mb-4">
              <h5 className="fw-bold">Age:</h5>
              <p>{nurse.age}</p>
            </div>
            <div className="col-md-6 mb-4">
              <h5 className="fw-bold">Phone:</h5>
              <p>{nurse.phone}</p>
            </div>
            <div className="col-md-6 mb-4">
              <h5 className="fw-bold">Gender:</h5>
              <p>{nurse.gender}</p>
            </div>
            <div className="col-md-6 mb-4">
              <h5 className="fw-bold">Email:</h5>
              <p>{nurse.email}</p>
            </div>
            <div className="col-md-6 mb-4">
              <h5 className="fw-bold">Address:</h5>
              <p>{nurse.address}</p>
            </div>
          </div>

          <div className="mt-4 d-flex gap-2">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigate("/nurse-update")}
            >
              Edit Details
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => setShowDeleteModal(true)}
            >
              Delete Nurse
            </button>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div
          className="modal fade show"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          style={{ display: "block" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  CONFIRM
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setShowDeleteModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                Are you sure you want to delete {nurse.name}'s record?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => setShowDeleteModal(false)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Example usage of NurseDetails
const samplenurse = {
  name: "Dr. John Doe Nurse",
  hireDate: "2021-01-15",
  department: "Cardiology",
  experience: "10 years",
  age: 45,
  phone: "+1 555-555-5555",
  gender: "Male",
  email: "john.doe@example.com",
  address: "123 Main Street, Cityville, Country",
  profileLink: "#",
};

export default function App() {
  return <NurseDetails nurse={samplenurse} />;
}
