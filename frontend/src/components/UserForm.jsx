import { useEffect, useState } from "react";

import Modal from "./Modal";

import { EMPTY_USER, USER_ROLES, USER_STATUSES } from "../utils/constants";

function UserForm({ user, onSubmit, onClose }) {
  const isEditMode = Boolean(user);

  const [formData, setFormData] = useState(user || EMPTY_USER);

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  useEffect(() => {
    setFormData(user || EMPTY_USER);
    setErrors({});
    setServerError("");
  }, [user]);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: "",
    }));
  }

  function validateForm() {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required.";
    } else if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters.";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    return errors;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setSubmitting(true);
      setServerError("");

      await onSubmit({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        role: formData.role,
        status: formData.status,
      });

      onClose();
    } catch (error) {
      console.error("Failed to save user:", error);

      if (error.data?.errors) {
        setErrors(error.data.errors);
      } else {
        setServerError(error.message || "Failed to save user.");
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Modal title={isEditMode ? "Edit User" : "Add User"} onClose={onClose}>
      <form className="user-form" onSubmit={handleSubmit}>
        {serverError && <div className="form-server-error">{serverError}</div>}

        <div className="form-field">
          <label htmlFor="name">Name</label>

          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
          />

          {errors.name && <span className="field-error">{errors.name}</span>}
        </div>

        <div className="form-field">
          <label htmlFor="email">Email</label>

          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />

          {errors.email && <span className="field-error">{errors.email}</span>}
        </div>

        <div className="form-field">
          <label htmlFor="phone">Phone</label>

          <input
            id="phone"
            name="phone"
            type="text"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone"
          />

          {errors.phone && <span className="field-error">{errors.phone}</span>}
        </div>

        <div className="form-row">
          <div className="form-field">
            <label htmlFor="role">Role</label>

            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              {USER_ROLES.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>

            {errors.role && <span className="field-error">{errors.role}</span>}
          </div>

          <div className="form-field">
            <label htmlFor="status">Status</label>

            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              {USER_STATUSES.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>

            {errors.status && (
              <span className="field-error">{errors.status}</span>
            )}
          </div>
        </div>

        <div className="form-actions">
          <button
            type="button"
            className="secondary-button"
            onClick={onClose}
            disabled={submitting}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="primary-button"
            disabled={submitting}
          >
            {submitting
              ? "Saving..."
              : isEditMode
                ? "Save Changes"
                : "Create User"}
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default UserForm;
