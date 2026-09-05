function UserRow({ user, onView, onEdit, onDelete }) {
  return (
    <tr>
      <td>
        <div className="user-name">{user.name}</div>
      </td>

      <td>{user.email}</td>

      <td>{user.phone || "—"}</td>

      <td>
        <span className="role-badge">{user.role}</span>
      </td>

      <td>
        <span className={`status-badge ${user.status}`}>{user.status}</span>
      </td>

      <td>
        <div className="table-actions">
          <button className="action-button" onClick={() => onView(user)}>
            View
          </button>

          <button className="action-button" onClick={() => onEdit(user)}>
            Edit
          </button>

          <button
            className="action-button delete"
            onClick={() => onDelete(user)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}

export default UserRow;
