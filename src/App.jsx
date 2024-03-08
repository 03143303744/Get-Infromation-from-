import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Caste: "",
    Phone: "",
    Address: "",
  });

  const [submitData, setSubmitData] = useState({
    FirstName: "",
    LastName: "",
    Caste: "",
    Phone: "",
    Address: "",
  });

  function onSubmit(e) {
    e.preventDefault();
    setSubmitData({ ...formData });
  }

  function getValue(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div>
      <div className='container'>
        <form onSubmit={onSubmit} className='Form_box'>
          <h3>Information Form</h3>
          <input type="text" name="FirstName" value={formData.FirstName} onChange={getValue} placeholder='Name' /> <br />
          <input type="text" name="LastName" value={formData.LastName} onChange={getValue} placeholder='Last Name' /> <br />
          <input type="text" name="Caste" value={formData.Caste} onChange={getValue} placeholder='Caste' /> <br />
          <input type="text" name="Phone" value={formData.Phone} onChange={getValue} placeholder='Phone' /> <br />
          <input type="text" name="Address" value={formData.Address} onChange={getValue} placeholder='Address' /> <br />
          <button type='submit'>Submit</button>
        </form>
        <table>
          <tr>
            <th>Name</th>
            <th>Lname</th>
            <th>Csate</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
          <tr>
            <td>{submitData.FirstName}</td>
            <td>{submitData.LastName}</td>
            <td>{submitData.Caste}</td>
            <td>{submitData.Phone}</td>
            <td>{submitData.Address}</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default App;
