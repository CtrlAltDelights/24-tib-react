function BlankTable() {
  return (
    <div className="flex justify-center">
      <table className="border-collapse border border-gray-400 w-3xl text-center">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">Name</th>
            <th className="border border-gray-400 px-4 py-2">Last name</th>
            <th className="border border-gray-400 px-4 py-2">Position</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 px-4 py-2"></td>
            <td className="border border-gray-400 px-4 py-2"></td>
            <td className="border border-gray-400 px-4 py-2"></td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2"></td>
            <td className="border border-gray-400 px-4 py-2"></td>
            <td className="border border-gray-400 px-4 py-2"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BlankTable;
