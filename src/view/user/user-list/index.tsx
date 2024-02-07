import { useEffect } from "react";
import Loading from "../../../components/shared/Loading";
import { useNavigate } from "react-router-dom";
import { getUsers, useAppDispatch, useAppSelector } from "../../../store";

const UserList = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { loading, users } = useAppSelector((state) => state.user);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    dispatch(getUsers({}));
  };

  if (loading) return <Loading loading={true} />;

  return (
    <div>
      <Loading loading={loading} />
      <div className="flex items-center justify-between mb-2">
        <h5>
          <strong>User List</strong>
        </h5>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-ms text-gray-700 uppercase bg-gray-200 h-14 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Rate
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: any) => {
              return (
                <tr
                  className="bg-white border-b hover:bg-gray-100"
                  key={user.id}
                  onClick={() => navigate(`/app/edit-user/${user.id}`)}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {user.name}
                  </th>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.phone ?? "N/A"}</td>
                  <td className="px-6 py-4">{user.role}</td>
                  <td className="px-6 py-4">{user.rate}</td>
                  <td className="px-6 py-4">{user.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
