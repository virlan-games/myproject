import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    education: '',
    graduationYear: '',
    workExperience: '',
    additionalInfo: '',
    contactPreference: '',
    hearAboutUs: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };

  return (
    <>
      <div className="coursebanner">
                   <div className="courseheading">Apply Online</div>
                  <div className="coursedetails">Home Apply Online</div>
               </div>
    <div className="form-container">
                    
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h2>Basic Information</h2>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-section">
          <h2>Contact Information</h2>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State:</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="zip">Zip:</label>
            <input
              type="text"
              id="zip"
              name="zip"
              value={formData.zip}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-section">
          <h2>Education</h2>
          <div className="form-group">
            <label htmlFor="education">Education:</label>
            <input
              type="text"
              id="education"
              name="education"
              value={formData.education}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="graduationYear">Graduation Year:</label>
            <input
              type="text"
              id="graduationYear"
              name="graduationYear"
              value={formData.graduationYear}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-section">
          <h2>Work Experience</h2>
          <div className="form-group">
            <label htmlFor="workExperience">Work Experience:</label>
            <textarea
              id="workExperience"
              name="workExperience"
              value={formData.workExperience}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-section">
          <h2>Additional Information</h2>
          <div className="form-group">
            <label htmlFor="additionalInfo">Additional Information:</label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="form-section">
          <h2>Contact Preferences</h2>
          <div className="form-group">
            <label htmlFor="contactPreference">Contact Preference:</label>
            <select
              id="contactPreference"
              name="contactPreference"
              value={formData.contactPreference}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a contact preference</option>
              <option value="phone">Phone</option>
              <option value="email">Email</option>
              <option value="mail">Mail</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="hearAboutUs">How did you hear about us?</label>
            <input
              type="text"
              id="hearAboutUs"
              name="hearAboutUs"
              value={formData.hearAboutUs}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
    </>
  );
};

export default Form;