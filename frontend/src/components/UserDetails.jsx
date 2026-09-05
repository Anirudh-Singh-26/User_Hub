import Modal from "./Modal";

function UserDetails({ user, onClose }) {
  if (!user) {
    return null;
  }

  return (
    <Modal title="User Details" onClose={onClose}>
      <div className="user-details">
        <div className="detail-item">
          <span className="detail-label">Name</span>

          <span className="detail-value">{user.name}</span>
        </div>

        <div className="detail-item">
          <span className="detail-label">Email</span>

          <span className="detail-value">{user.email}</span>
        </div>

        <div className="detail-item">
          <span className="detail-label">Phone</span>

          <span className="detail-value">{user.phone || "—"}</span>
        </div>

        <div className="detail-item">
          <span className="detail-label">Role</span>

          <span className="detail-value">{user.role}</span>
        </div>

        <div className="detail-item">
          <span className="detail-label">Status</span>

          <span className="detail-value">{user.status}</span>
        </div>

        <div className="detail-item">
          <span className="detail-label">Created</span>

          <span className="detail-value">
            {new Date(user.createdAt).toLocaleString()}
          </span>
        </div>
      </div>

      <div className="form-actions">
        <button className="secondary-button" onClick={onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
}

export default UserDetails;
