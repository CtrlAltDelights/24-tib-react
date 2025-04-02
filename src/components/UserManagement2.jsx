import { useState, useEffect } from "react";
import axios from "axios";

export default function UserManagement2() {
  const [users, setUsers] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_URL = "https://jsd5-mock-backend.onrender.com/members";

  // Fetch all users when component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  // GET - Fetch all users
  const fetchUsers = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
    } catch (err) {
      setError("Failed to fetch users: " + err.message);
      console.error("Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  };

  // POST - Create a new user
  const addUser = async (e) => {
    e.preventDefault();
    if (firstName && lastName && position) {
      setLoading(true);
      setError("");

      const newUser = {
        name: firstName,
        lastname: lastName,
        position: position,
      };

      try {
        const response = await axios.post(API_URL, newUser);
        setUsers([...users, response.data]);
        resetForm();
      } catch (err) {
        setError("Failed to add user: " + err.message);
        console.error("Error adding user:", err);
      } finally {
        setLoading(false);
      }
    }
  };

  // PUT - Update existing user
  const updateUser = async (e) => {
    e.preventDefault();
    if (firstName && lastName && position && editingId) {
      setLoading(true);
      setError("");

      const updatedUser = {
        name: firstName,
        lastname: lastName,
        position: position,
      };

      try {
        const response = await axios.put(
          `${API_URL}/${editingId}`,
          updatedUser
        );
        setUsers(
          users.map((user) => (user.id === editingId ? response.data : user))
        );
        resetForm();
        setEditingId(null);
      } catch (err) {
        setError("Failed to update user: " + err.message);
        console.error("Error updating user:", err);
      } finally {
        setLoading(false);
      }
    }
  };

  // DELETE - Remove a user
  const deleteUser = async (userId) => {
    setLoading(true);
    setError("");
    try {
      await axios.delete(`${API_URL}/${userId}`);
      setUsers(users.filter((user) => user.id !== userId));
    } catch (err) {
      setError("Failed to delete user: " + err.message);
      console.error("Error deleting user:", err);
    } finally {
      setLoading(false);
    }
  };

  // Set up edit mode
  const startEdit = (user) => {
    setFirstName(user.name);
    setLastName(user.lastname);
    setPosition(user.position);
    setEditingId(user.id);
  };

  // Reset the form
  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setPosition("");
  };

  // Cancel editing
  const cancelEdit = () => {
    resetForm();
    setEditingId(null);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Create User Here</h2>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">{error}</div>
      )}

      {/* User Form */}
      <form
        onSubmit={editingId ? updateUser : addUser}
        className="mb-8 space-y-4"
      >
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <div className="flex-1">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder=" name"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="flex-1">
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="last name"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="flex-1">
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="position"
              required
            />
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            type="submit"
            className={`flex-1 py-2 px-4 rounded text-white ${
              editingId
                ? "bg-green-500 hover:bg-green-600"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
            disabled={loading}
          >
            {loading ? "Processing..." : editingId ? "Update User" : "Add User"}
          </button>

          {editingId && (
            <button
              type="button"
              onClick={cancelEdit}
              className="flex-1 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Users Table */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Users</h3>
          <button
            onClick={fetchUsers}
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200"
            disabled={loading}
          >
            Refresh
          </button>
        </div>

        {loading && <p className="text-center py-4">Loading...</p>}

        {!loading && users.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No users found</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="py-2 px-4 text-left">Name</th>
                  <th className="py-2 px-4 text-left">Last Name</th>
                  <th className="py-2 px-4 text-left">Position</th>
                  <th className="py-2 px-4 text-right"></th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4">{user.name}</td>
                    <td className="py-2 px-4">{user.lastname}</td>
                    <td className="py-2 px-4">{user.position}</td>
                    <td className="py-2 px-4 text-right">
                      <button
                        onClick={() => startEdit(user)}
                        className="bg-yellow-500 text-white p-1 px-2 rounded hover:bg-yellow-600 text-sm mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteUser(user.id)}
                        className="bg-red-500 text-white p-1 px-2 rounded hover:bg-red-600 text-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
