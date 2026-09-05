import apiRequest from "./api";

export async function getUsers() {
  return apiRequest("/users");
}

export async function getUser(id) {
  return apiRequest(`/users/${id}`);
}

export async function getUserCount() {
  return apiRequest("/users/count");
}

export async function createUser(userData) {
  return apiRequest("/users", {
    method: "POST",
    data: userData,
  });
}

export async function updateUser(id, userData) {
  return apiRequest(`/users/${id}`, {
    method: "PUT",
    data: userData,
  });
}

export async function deleteUser(id) {
  return apiRequest(`/users/${id}`, {
    method: "DELETE",
  });
}
