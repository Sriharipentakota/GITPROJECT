import { FiFileText } from 'react-icons/fi'
import { FiArrowLeft } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate();
  const currentStep = localStorage.getItem('resumeCurrentStep')
  return (
    <header className="header">
      <div className="container">
        <div className="header-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {currentStep !== "edit" &&
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <button
                type="button"
                onClick={() => {
                  localStorage.removeItem('resumeData');
                  localStorage.removeItem('resumeCurrentStep');
                  navigate('/');
                }}
                aria-label="Back to Home"
                style={{ color: '#022f77ff', border: '1px solid #5d8ad4ff', padding: '2px 4px' }}
                className="back-btn"
              >
                <FiArrowLeft size={24} style={{ marginRight: 4 }} />
              </button>
              <div className="logo">
                <FiFileText className="logo-icon" />
                <span className="logo-text">ATS Resume Formatter</span>
              </div>
            </div>
          }
          <nav className="nav">
            <div className="nav-item">
              <span>Professional Resume Builder</span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header