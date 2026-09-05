import { useState } from "react";

import useUsers from "../hooks/useUsers";

import UserTable from "../components/UserTable";
import UserFilters from "../components/UserFilters";
import UserForm from "../components/UserForm";
import UserDetails from "../components/UserDetails";
import DeleteConfirmation from "../components/DeleteConfirmation";

function Users() {
  const { users, loading, error, addUser, editUser, removeUser } = useUsers();

  const [search, setSearch] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");

  const [showForm, setShowForm] = useState(false);

  const [editingUser, setEditingUser] = useState(null);

  const [viewingUser, setViewingUser] = useState(null);

  const [deletingUser, setDeletingUser] = useState(null);

  const filteredUsers = users.filter((user) => {
    const searchValue = search.trim().toLowerCase();

    const matchesSearch =
      !searchValue ||
      user.name.toLowerCase().includes(searchValue) ||
      user.email.toLowerCase().includes(searchValue) ||
      user.phone?.toLowerCase().includes(searchValue);

    const matchesRole = !role || user.role === role;
    const matchesStatus = !status || user.status === status;

    return matchesSearch && matchesRole && matchesStatus;
  });

  function handleAddUser() {
    setEditingUser(null);
    setShowForm(true);
  }

  function handleEdit(user) {
    setEditingUser(user);
    setShowForm(true);
  }

  function handleView(user) {
    setViewingUser(user);
  }

  function handleDelete(user) {
    setDeletingUser(user);
  }

  async function handleSubmit(userData) {
    if (editingUser) {
      await editUser(editingUser._id, userData);
    } else {
      await addUser(userData);
    }
  }

  async function handleConfirmDelete(id) {
    await removeUser(id);
  }

  function closeForm() {
    setShowForm(false);
    setEditingUser(null);
  }

  return (
    <div className="users-page">
      <div className="page-header">
        <div>
          <h2>Users</h2>

          <p>Manage all registered users.</p>
        </div>

        <button className="primary-button" onClick={handleAddUser}>
          + Add User
        </button>
      </div>

      <UserFilters
        search={search}
        setSearch={setSearch}
        role={role}
        setRole={setRole}
        status={status}
        setStatus={setStatus}
      />

      {loading && <div className="loading-state">Loading users...</div>}

      {error && (
        <div className="error-state">
          <h3>Unable to load users</h3>

          <p>Something went wrong while fetching the users.</p>
        </div>
      )}

      {!loading && !error && (
        <UserTable
          users={filteredUsers}
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}

      {showForm && (
        <UserForm
          user={editingUser}
          onSubmit={handleSubmit}
          onClose={closeForm}
        />
      )}

      {viewingUser && (
        <UserDetails user={viewingUser} onClose={() => setViewingUser(null)} />
      )}

      {deletingUser && (
        <DeleteConfirmation
          user={deletingUser}
          onConfirm={handleConfirmDelete}
          onClose={() => setDeletingUser(null)}
        />
      )}
    </div>
  );
}

export default Users;
