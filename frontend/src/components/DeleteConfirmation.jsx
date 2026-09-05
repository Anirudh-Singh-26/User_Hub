import { useState } from "react";

import Modal from "./Modal";

function DeleteConfirmation({ user, onConfirm, onClose }) {
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState("");

  async function handleDelete() {
    try {
      setDeleting(true);
      setError("");

      await onConfirm(user._id);

      onClose();
    } catch (error) {
      console.error("Failed to delete user:", error);

      setError(error.message || "Failed to delete user.");
    } finally {
      setDeleting(false);
    }
  }

  return (
    <Modal title="Delete User" onClose={onClose}>
      <div className="delete-confirmation">
        <p>
          Are you sure you want to delete <strong>{user.name}</strong>?
        </p>

        <p className="warning-text">This action cannot be undone.</p>

        {error && <p className="field-error">{error}</p>}

        <div className="form-actions">
          <button
            className="secondary-button"
            onClick={onClose}
            disabled={deleting}
          >
            Cancel
          </button>

          <button
            className="danger-button"
            onClick={handleDelete}
            disabled={deleting}
          >
            {deleting ? "Deleting..." : "Delete User"}
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteConfirmation;
