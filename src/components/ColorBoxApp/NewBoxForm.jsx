import React, { useState } from 'react';
import './NewBoxForm.css';

function NewBoxForm({ addBox }) {
  const [formData, setFormData] = useState({
    width: '',
    height: '',
    backgroundColor: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(formData);
    setFormData({ width: '', height: '', backgroundColor: '' });
  };

  return (
    <div className="new-box-form-container">
      <form onSubmit={handleSubmit}>
        <div>
        <h1>Color Box Maker</h1>
          <label htmlFor="width">Width:</label>
          <input
            type="text"
            id="width"
            name="width"
            value={formData.width}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="height">Height:</label>
          <input
            type="text"
            id="height"
            name="height"
            value={formData.height}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="backgroundColor">Background Color:</label>
          <input
            type="text"
            id="backgroundColor"
            name="backgroundColor"
            value={formData.backgroundColor}
            onChange={handleChange}
          />
        </div>
        <button>Create Box</button>
      </form>
    </div>
  );
}

export default NewBoxForm;
