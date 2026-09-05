import { useEffect, useState } from "react";

import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../services/userService";

function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        setError(null);

        const response = await getUsers();

        setUsers(response.data);
      } catch (error) {
        console.error("Failed to fetch users:", error);

        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  const addUser = async (userData) => {
    const response = await createUser(userData);

    setUsers((currentUsers) => [response.data, ...currentUsers]);

    return response.data;
  };

  const editUser = async (id, userData) => {
    const response = await updateUser(id, userData);

    setUsers((currentUsers) =>
      currentUsers.map((user) => (user._id === id ? response.data : user)),
    );

    return response.data;
  };

  const removeUser = async (id) => {
    await deleteUser(id);

    setUsers((currentUsers) => currentUsers.filter((user) => user._id !== id));
  };

  return {
    users,
    loading,
    error,
    addUser,
    editUser,
    removeUser,
  };
}

export default useUsers;
