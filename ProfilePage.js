import React from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faUserGraduate, faMoneyCheckDollar, faLayerGroup, faLocationDot } from '@fortawesome/free-solid-svg-icons'; // Import the DollarSign icon
import './ProfilePage.css'; // Import CSS file for styling

const ProfilePage = () => {
    return (
        <>
            <div className="teacher-profile">
                <div className="teacher-photo">
                    <img src="ccc.jpg" alt="Teacher" />
                </div>
                <div className="teacher-info">
                    <h2>John Doe</h2>
                    <div className="teacher-details">
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#0b2fac' }} /> New York, USA</p>
                        <p><FontAwesomeIcon icon={faUserGraduate} style={{ color: '#0b2fac' }} /> Mathematics Teacher</p>
                    </div>
                    <div className="contact-container">
                        <button className="contact-button" to="/">Contact</button>
                    </div>
                    <p className="free">first class free</p>
                    <h4 className='price'>200 MAD/hr</h4> {/* Text added below the button */}
                </div>
            </div>
            <hr /> {/* Horizontal line */}
            <div className="title">
                <h1 className="big-title">A patient and friendly Maths tutor</h1>
                <div className="advert-section">
                    <h2 className="advert-title">Advert description</h2>
                    <p className="advert-description">
                        My name is Hadia and I am currently a second year student at University.
                        For my GCSEs, I have achieved grade 8s for Biology, Chemistry, Physics, Maths and Geography. As well as this, I achieved a 7 for Statistics in year 10, and grade 6s for English Language, English Literature and French.
                        I am a friendly and understanding individual and have been commended on helping my fellow classmates to understand difficult concepts in a much simpler manner. I also have a younger sister studying at GCSE level whom I help with her studies. I believe that the most efficient way to do well academically is to understand, not just remember. Therefore, I prioritise explanations and examples over memorisation when it comes to my style of teaching. I find this to be the most effective for my students as what they're learning is now not just a mix of meaningless words that they have to remember. I pride myself on my way of simplification and explanation.
                        I have subject knowledge on all of the baseline GCSE subjects as well as Geography and Separate Sciences. I am also able to teach at Primary and KS3 level.
                    </p>
                    <h2 className="about-me-title">About Me</h2>
                    <p className="about-me-description">
                        Hi I'm Roan, I'm a Maths and Economics tutor with 300+ lessons completed. I study Economics with International Finance and Banking which provides a high level of knowledge in Maths as well as Economics. I sat my own A level exams fairly recently where I achieved an A in Maths, and an A in Economics, despite being predicted a D and C at the start of Year 2. I think my understanding of what it feels like to struggle with grades, and my knowledge of how to overcome this will help man...
                    </p>
                </div>
                <div className="additional-info">
                    <h2 className='price2'><FontAwesomeIcon icon={faMoneyCheckDollar} style={{ color: '#0b2fac' }} /> Price</h2>
                    <p className='free2'>200 MAD/hr</p>
                    <p className='free3'>first class free</p>
                    <h2 className="level-title"><FontAwesomeIcon icon={faLayerGroup} style={{ color: '#0b2fac' }} /> Level of the lessons</h2>
                    <ul className="levels">
                        <p>Infant and nursery school</p>
                        <p>Primary</p>
                        <p>Secondary school</p>
                    </ul>
                    <h2 className="location-title"><FontAwesomeIcon icon={faLocationDot } style={{ color: '#0b2fac' }} /> Location preferences</h2>
                    <p className="location-description">London</p>
                </div>
            </div>
        </>
    );
};

export default ProfilePage;
