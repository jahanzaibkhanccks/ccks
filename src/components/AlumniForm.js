import React, { useState } from 'react';
import collegeLogo from '../Ccks/logo.png';
import './khan.css';

export default function AlumniForm() {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    batch: '',
    branch: '',
    usn: '',
    fathersName: '',
    contactNumber: '',
    email: '',
    mobileNumber: '',
    presentAddress: '',
    presentCity: '',
    presentState: '',
    permanentAddress: '',
    permanentCity: '',
    permanentState: '',
    designation: '',
    employmentAddress: '',
    employmentCity: '',
    employmentState: '',
    maritalStatus: 'Unmarried',
    marriageDate: '',
    achievements: '',
    otherAchievements: '',
    suggestions: ''
  });

  const [file, setFile] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFile = e => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    // Optional: clear form after close
    // setFormData({ ...initialState });
    // setFile(null);
  };

  return (
    <div className="alumni-form-container">
      <form onSubmit={handleSubmit} className="alumni-form">
        <div className="form-header">
          <img src={collegeLogo} alt="CCKS Logo" className="college-logo" />
          <h2>Cadet College Killa Saifullah</h2>
          <h3>ALUMNI REGISTRATION FORM</h3>
        </div>

        <div className="form-section">
          <div className="form-row">
            <div className="form-group">
              <label>Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>D.O.B.:</label>
              <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Batch:</label>
              <input type="text" name="batch" value={formData.batch} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Branch:</label>
              <input type="text" name="branch" value={formData.branch} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>House</label>
              <input type="text" name="usn" value={formData.usn} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Father's Name:</label>
              <input type="text" name="fathersName" value={formData.fathersName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Contact Number:</label>
              <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email ID:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Mobile Number:</label>
              <div className="mobile-input">
                <span>+91</span>
                <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
              </div>
            </div>
          </div>

          <div className="form-section-title">Address Information</div>

          <div className="form-group">
            <label>Present Address:</label>
            <input type="text" name="presentAddress" value={formData.presentAddress} onChange={handleChange} required />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>City:</label>
              <input type="text" name="presentCity" value={formData.presentCity} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>State:</label>
              <input type="text" name="presentState" value={formData.presentState} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-group">
            <label>Permanent Address:</label>
            <input type="text" name="permanentAddress" value={formData.permanentAddress} onChange={handleChange} required />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>City:</label>
              <input type="text" name="permanentCity" value={formData.permanentCity} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>State:</label>
              <input type="text" name="permanentState" value={formData.permanentState} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-section-title">Employment Information</div>

          <div className="form-group">
            <label>Present Employment:</label>
            <div className="form-row">
              <div className="form-group">
                <label>Designation:</label>
                <input type="text" name="designation" value={formData.designation} onChange={handleChange} />
              </div>
            </div>
            <div className="form-group">
              <label>Address:</label>
              <input type="text" name="employmentAddress" value={formData.employmentAddress} onChange={handleChange} />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>City:</label>
                <input type="text" name="employmentCity" value={formData.employmentCity} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>State:</label>
                <input type="text" name="employmentState" value={formData.employmentState} onChange={handleChange} />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Married/Unmarried:</label>
              <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange}>
                <option value="Unmarried">Unmarried</option>
                <option value="Married">Married</option>
              </select>
            </div>
            {formData.maritalStatus === 'Married' && (
              <div className="form-group">
                <label>Date of Marriage:</label>
                <input type="date" name="marriageDate" value={formData.marriageDate} onChange={handleChange} />
              </div>
            )}
          </div>

          <div className="form-group">
            <label>Achievements in Career:</label>
            <textarea name="achievements" value={formData.achievements} onChange={handleChange} rows="3"></textarea>
          </div>

          <div className="form-group">
            <label>Other Achievements (GATE/PSU/CIVIL Service etc.):</label>
            <textarea name="otherAchievements" value={formData.otherAchievements} onChange={handleChange} rows="3"></textarea>
          </div>

          <div className="form-group">
            <label>Suggestions for Improvement:</label>
            <textarea name="suggestions" value={formData.suggestions} onChange={handleChange} rows="5"></textarea>
          </div>

          <div className="form-group">
            <label>Profile Picture:</label>
            <input type="file" onChange={handleFile} accept="image/*" />
          </div>

          <div className="form-footer">
            <button type="submit" className="submit-button">Submit</button>
            <div className="office-use">
              Jahanzaib Khan Aryan (Developer)
            </div>
          </div>
        </div>
      </form>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Registration Successful!</h3>
            <p>Your alumni registration has been submitted successfully.</p>
            <button onClick={closePopup} className="close-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
