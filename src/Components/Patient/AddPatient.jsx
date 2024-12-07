import React, { useState } from "react";

export default function PatientForm() {
  const [patient, setpatient] = useState({
    name: "",
    admissionDate: "",
    department: "",
    pcdName: "",
    age: "",
    phone: "",
    gender: "",
    email: "",
    details: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setpatient({
      ...patient,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-8">
          {" "}
          {/* Set form to 50% width */}
          <div className="card shadow-lg p-4 rounded">
            <h2 className="text-center mb-4 text-white bg-primary py-3 rounded-top">
              Add New patient
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="name"
                    name="name"
                    value={patient.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="admissionDate" className="form-label">
                    Admission Date
                  </label>
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    id="admissionDate"
                    name="admissionDate"
                    value={patient.admissionDate}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="department" className="form-label">
                    Department
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="department"
                    name="department"
                    value={patient.department}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="pcdName" className="form-label">
                    PCD Name
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="pcdName"
                    name="pcdName"
                    value={patient.pcdName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="age" className="form-label">
                    Age
                  </label>
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    id="age"
                    name="age"
                    value={patient.age}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="form-control form-control-lg"
                    id="phone"
                    name="phone"
                    value={patient.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="gender" className="form-label">
                    Gender
                  </label>
                  <select
                    className="form-select form-select-lg"
                    id="gender"
                    name="gender"
                    value={patient.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="email"
                    name="email"
                    value={patient.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="details" className="form-label">
                    Details
                  </label>
                  <textarea
                    className="form-control form-control-lg"
                    id="details"
                    name="details"
                    value={patient.details}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="col-md-6">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="address"
                    name="address"
                    value={patient.address}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-success btn-lg w-100 mt-4"
              >
                Add patient
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
