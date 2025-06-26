import { FiUser, FiFileText } from 'react-icons/fi'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <FiFileText className="logo-icon" />
            <span className="logo-text">ResumeBuilder Pro</span>
          </div>
          <nav className="nav">
            <div className="nav-item">
              <FiUser className="nav-icon" />
              <span>Portfolio Builder</span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header