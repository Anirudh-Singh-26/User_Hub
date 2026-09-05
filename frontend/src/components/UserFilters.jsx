import { USER_ROLES, USER_STATUSES } from "../utils/constants";

function UserFilters({ search, setSearch, role, setRole, status, setStatus }) {
  return (
    <div className="user-filters">
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <select value={role} onChange={(event) => setRole(event.target.value)}>
        <option value="">All Roles</option>

        {USER_ROLES.map((roleOption) => (
          <option key={roleOption} value={roleOption}>
            {roleOption}
          </option>
        ))}
      </select>

      <select
        value={status}
        onChange={(event) => setStatus(event.target.value)}
      >
        <option value="">All Statuses</option>

        {USER_STATUSES.map((statusOption) => (
          <option key={statusOption} value={statusOption}>
            {statusOption}
          </option>
        ))}
      </select>
    </div>
  );
}

export default UserFilters;
