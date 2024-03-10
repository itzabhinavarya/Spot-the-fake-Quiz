/* eslint-disable react/prop-types */
const UserTable = ({ score, playerName }) => {
  return (
    <>
      <div className="relative overflow-x-auto font-poppins">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="">
              <th scope="col" className="px-6 py-3">
                Players 🚀
              </th>
              <th scope="col" className="px-6 py-3">
                Top Score 🎯
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {playerName}
              </th>
              <td className="px-6 py-4 font-medium">{score}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserTable;
