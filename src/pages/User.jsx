import React from "react";

function User() {
  return (
    <>
      <h1 className="mt-36 mb-20 text-4xl text-center">
        Generation Thailand <br /> React - Assessment
      </h1>
      <div className="space-x-32 text-center">
        {" "}
        <button className="border-2">User Home Sector</button>
        <button className="border-2 mb-20">Admin Home Sector</button>
        <div className="flex justify-center">
          <table className="border-2 border-solid">
            <tr className="border-2 border-solid">
              <th className="border-2 border-solid">Company</th>
              <th className="border-2 border-solid">Contact</th>
              <th className="border-2 border-solid">Country</th>
            </tr>
            <tr className="border-2 border-solid">
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr className="border-2 border-solid">
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default User;
