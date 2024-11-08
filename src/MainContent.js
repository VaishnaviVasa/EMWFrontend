import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainContent.css';

const MainContent = () => {
    const navigate = useNavigate();

    // Function to handle button click and navigate to AssessmentPage
    const startAssessment = () => {
        navigate('/assessment');
    };

    return (
        <div className="main-content">
            <h1>Assess Your Mental Well-being</h1>
            <div className="text-content">
                <p>
                    Take a simple, reliable test to understand your emotional state. MindCheck
                    helps you gain insight into your thoughts, feelings, and overall mental well-being.
                    Get started on your journey to self-awareness and improved mental health today.
                </p>
                <button className="assessment-button" onClick={startAssessment}>
                    Start Your Assessment
                </button>
            </div>
            <div className="illustration">
                <img src="/imgr.png" alt='illustration'/>
            </div>
        </div>
    );
};

export default MainContent;
