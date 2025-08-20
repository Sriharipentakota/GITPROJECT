import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiPlus, FiEdit3, FiTrash2, FiDownload, FiEye, FiUser, FiLogOut, FiClock, FiFileText } from 'react-icons/fi'
import { useAuth } from '../context/AuthContext'
import { useResumeContext } from '../context/ResumeContext'

function Dashboard() {
  const { user, logout } = useAuth()
  const { userResumes, loadUserResumes, loadResume, deleteResume, createNewResume, loading } = useResumeContext()
  const navigate = useNavigate()
  const [showDeleteModal, setShowDeleteModal] = useState(null)

  useEffect(() => {
    loadUserResumes()
  }, [])

  const handleCreateNew = () => {
    createNewResume()
    navigate('/builder')
  }

  const handleEditResume = (resumeId) => {
    loadResume(resumeId)
    navigate('/builder')
  }
  const handleDeleteResume = async (resumeId) => {
    await deleteResume(resumeId)
    setShowDeleteModal(null)
  }

  const handleLogout = () => {
    logout()
    navigate('/signin')
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="container">
          <div className="header-content">
            <div className="header-left">
              <h1>Dashboard</h1>
              <p>Welcome back, {user?.firstName}!</p>
            </div>
            <div className="header-right">
              <div className="user-menu">
                <div className="user-info">
                  <FiUser className="user-icon" />
                  <span>{user?.firstName} {user?.lastName}</span>
                </div>
                <button className="btn btn-secondary" onClick={handleLogout}>
                  <FiLogOut />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="container">
          <div className="dashboard-stats">
            <div className="stat-card">
              <div className="stat-icon">
                <FiFileText />
              </div>
              <div className="stat-info">
                <h3>{userResumes.length}</h3>
                <p>Total Resumes</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <FiClock />
              </div>
              <div className="stat-info">
                <h3>{user?.lastLogin ? formatDate(user.lastLogin) : 'Today'}</h3>
                <p>Last Login</p>
              </div>
            </div>
          </div>

          <div className="dashboard-actions">
            <div className="section-header">
              <h2>Your Resumes</h2>
              <button className="btn btn-primary" onClick={handleCreateNew}>
                <FiPlus />
                Create New Resume
              </button>
            </div>

            {loading ? (
              <div className="loading-container">
                <div className="loading"></div>
                <p>Loading your resumes...</p>
              </div>
            ) : userResumes.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">
                  <FiFileText />
                </div>
                <h3>No resumes yet</h3>
                <p>Create your first ATS-optimized resume and portfolio website</p>
                <button className="btn btn-primary" onClick={handleCreateNew}>
                  <FiPlus />
                  Create Your First Resume
                </button>
              </div>
            ) : (
              <div className="resumes-grid">
                {userResumes.map((resume) => (
                  <div key={resume._id} className="resume-card">
                    <div className="resume-header">
                      <h3>{resume.title}</h3>
                      <div className="resume-actions">
                        <button
                          className="btn-icon"
                          onClick={() => handleEditResume(resume._id)}
                          title="Edit Resume"
                        >
                          <FiEdit3 />
                        </button>
                        <button
                          className="btn-icon btn-danger"
                          onClick={() => setShowDeleteModal(resume._id)}
                          title="Delete Resume"
                        >
                          <FiTrash2 />
                        </button>
                      </div>
                    </div>

                    <div className="resume-info">
                      {resume.personalInfo?.name && (
                        <p className="resume-name">{resume.personalInfo.name}</p>
                      )}
                      {resume.personalInfo?.email && (
                        <p className="resume-email">{resume.personalInfo.email}</p>
                      )}
                    </div>

                    <div className="resume-meta">
                      <div className="resume-date">
                        <FiClock />
                        <span>Updated {formatDate(resume.updatedAt)}</span>
                      </div>
                    </div>

                    <div className="resume-preview">
                      <div className="preview-sections">
                        {resume.summary && <span className="section-tag">Summary</span>}
                        {resume.experience?.length > 0 && <span className="section-tag">Experience</span>}
                        {resume.education?.length > 0 && <span className="section-tag">Education</span>}
                        {resume.skills?.length > 0 && <span className="section-tag">Skills</span>}
                        {resume.projects?.length > 0 && <span className="section-tag">Projects</span>}
                      </div>
                    </div>

                    <div className="resume-footer">
                      <button
                        className="btn btn-outline btn-sm"
                        onClick={() => handleEditResume(resume._id)}
                      >
                        <FiEdit3 />
                        Edit
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>Delete Resume</h3>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete this resume? This action cannot be undone.</p>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                onClick={() => setShowDeleteModal(null)}
              >
                Cancel
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDeleteResume(showDeleteModal)}
              >
                <FiTrash2 />
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard