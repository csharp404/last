import React, { useState } from 'react';

const EditableDiagnosisForm = ({ initialDiagnosis, onSubmit }) => {
  const [formData, setFormData] = useState(initialDiagnosis);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    alert('Diagnosis updated successfully!');
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm bg-light">
        <h2 className="text-center mb-4">Edit Diagnosis</h2>

        <div className="mb-3">
          <label htmlFor="patientId" className="form-label">
            Patient ID:
          </label>
          <input
            type="text"
            id="patientId"
            name="patientId"
            value={formData.patientId}
            onChange={handleChange}
            disabled
            className="form-control"
            placeholder="Patient ID"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="symptoms" className="form-label">
            Symptoms:
          </label>
          <textarea
            id="symptoms"
            name="symptoms"
            value={formData.symptoms}
            onChange={handleChange}
            required
            className="form-control"
            placeholder="Edit symptoms"
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="diagnosis" className="form-label">
            Diagnosis:
          </label>
          <input
            type="text"
            id="diagnosis"
            name="diagnosisText"
            value={formData.diagnosisText}
            onChange={handleChange}
            required
            className="form-control"
            placeholder="Edit diagnosis"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="notes" className="form-label">
            Additional Notes:
          </label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="form-control"
            placeholder="Edit additional notes"
          ></textarea>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-success">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditableDiagnosisForm;
