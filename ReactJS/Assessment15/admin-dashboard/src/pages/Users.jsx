import { useForm } from "react-hook-form";
import { useState, useCallback } from "react";

function Users() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const [users, setUsers] = useState(() => {
    const stored = localStorage.getItem("users");
    return stored ? JSON.parse(stored) : [];
  });

  const updateStorage = (updatedUsers) => {
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    window.dispatchEvent(new Event("usersUpdated"));
  };

  const onSubmit = useCallback((data) => {
    const updatedUsers = [...users, data];
    setUsers(updatedUsers);
    updateStorage(updatedUsers);
    reset();
  }, [users, reset]);

  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    updateStorage(updatedUsers);
  };

  return (
    <div className="p-6">
      {/* Add User Form */}
      <div className="bg-white dark:bg-gray-800 dark:text-white p-6 rounded-xl shadow mb-6 transition-colors duration-300">
        <h2 className="text-xl font-semibold mb-4">Add User</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          
          {/* Name Field */}
          <div>
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
              className="w-full border dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white p-2 rounded"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
              className="w-full border dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white p-2 rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
          >
            Add User
          </button>
        </form>
      </div>

      {/* User List */}
      <div className="bg-white dark:bg-gray-800 dark:text-white p-6 rounded-xl shadow transition-colors duration-300">
        <h2 className="text-lg font-semibold mb-4">User List</h2>

        {users.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-300">
            No users added yet.
          </p>
        ) : (
          <ul className="space-y-2">
            {users.map((user, index) => (
              <li
                key={index}
                className="border dark:border-gray-600 p-2 rounded flex justify-between items-center"
              >
                <div>
                  <span className="font-medium">{user.name}</span>
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                    {user.email}
                  </span>
                </div>

                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Users;