import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Schedule.css';
import plusSvg from './../../assets/images/plus.svg';
import what from  './../../assets/images/whatsapp.svg';
import you from  './../../assets/images/youtube.svg';
import insta from  './../../assets/images/insta.svg';
import mail from   './../../assets/images/email.svg';

const Schedule = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('basic'); // Track the active tab
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [instagram, setInstagram] = useState('');
  const [youtube, setYoutube] = useState('');
  const [profiles, setProfiles] = useState([]);
  const [isFormComplete, setIsFormComplete] = useState(false); // Track form completion

  const openModal = () => {
    setIsModalOpen(true);
    setActiveTab('basic'); // Show Basic Details tab by default
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const switchTab = (tabName) => {
    setActiveTab(tabName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === 'basic') {
      // Handle Basic Details submission
      if (name && phoneNumber && email) {
        switchTab('social'); // Switch to Social Details tab after Basic Details are filled
      }
    } else {
      // Handle Social Details submission
      if (whatsapp || instagram || youtube) {
        const newProfile = {
          name,
          phoneNumber,
          email,
          socialDetails: {
            whatsapp,
            instagram,
            youtube,
          },
        };
        setProfiles([...profiles, newProfile]);
        setName('');
        setPhoneNumber('');
        setEmail('');
        setWhatsapp('');
        setInstagram('');
        setYoutube('');
        closeModal();
        setIsFormComplete(true); // Set form completion to true
      }
    }
  };

  return (
    <div className="bottom_card">
<div className="center-button"  onClick={openModal}>
        {!isFormComplete && (
          <div className='center-img'><img src={plusSvg} alt="Add Profile" /></div>
        )}
        {!isFormComplete && (
        <div>Add Profile</div>
        )}
      </div>


      <div
        className="modal"
        tabIndex="-1"
        role="dialog"
        style={{ display: isModalOpen ? 'block' : 'none' }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Profile</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={closeModal}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <button
                    className={`nav-link ${activeTab === 'basic' ? 'active' : ''}`}
                    onClick={() => switchTab('basic')}
                  >
                    Basic Details
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${activeTab === 'social' ? 'active' : ''}`}
                    onClick={() => switchTab('social')}
                  >
                    Social Details
                  </button>
                </li>
              </ul>
              <form onSubmit={handleSubmit}>
                {activeTab === 'basic' ? (
                  <div className="section">
                    <h4>Basic Details</h4>
                    <div className="form-group">
                      <label>Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone Number:</label>
                      <input
                        type="number"
                        className="form-control"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Email:</label>
                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                ) : (
                  <div className="section">
                    <h4>Social Details</h4>
                    <div className="form-group">
                      <label>WhatsApp:</label>
                      <input
                        type="number"
                        className="form-control"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Instagram:</label>
                      <input
                        type="text"
                        className="form-control"
                        value={instagram}
                        onChange={(e) => setInstagram(e.target.value)}
                      />
                    </div>
                  </div>
                )}
                {activeTab === 'basic' ? (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => switchTab('social')}
                  >
                    Next
                  </button>
                ) : (
                  <>
                    <button type="submit" className="btn btn-primary">
                      Save
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-list">
        <h2 className='card-head'>{profiles.map((profile, index)=>(
            <div key={index}>
                {profile.name}
            </div>
        ))}</h2>
        
 <div className="card-sub">
        {profiles.map((profile, index) => (
          <div key={index} className="profile-item">
            <div>
              <strong><img  className='what' src={what}/></strong> {profile.phoneNumber}
            </div>
            <div>
              <strong><img  className='mail' src={mail}/></strong> {profile.email}
            </div>
            <div>
              <strong><img  className='you' src={you}/></strong> {profile.socialDetails.whatsapp}
            </div>
            <div>
              <strong><img className='insta' src={insta}/></strong> {profile.socialDetails.instagram}
            </div>
          </div>
        ))}
      </div>

      </div>
    </div>
  );
};

export default Schedule;
