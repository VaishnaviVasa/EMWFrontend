import React from 'react';
import './AssessmentPage.css'; // Import the CSS file for styling


function AssessmentPage() {
    return (
        <div className="container">
            {/* Information section with image and text */}
            <div className="info-section">
                <img src="./img2.png" alt="Confidentiality Icon" className="info-image" />
                <p>Your answers are confidential and will only be used to generate your personal score.</p>
            </div>

            {/* Motivational text */}
            <p className="motivational-text">
                Don't wait anymore to start taking control of your mind and your life.
            </p>

            {/* Call-to-action button */}
            <button className="assessment-button">Take test now</button>
        </div>
    );
}

export default AssessmentPage;
