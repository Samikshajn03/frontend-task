import React from "react";

type Timesheet = {
  week: number;
  date: string;
  status: "COMPLETED" | "INCOMPLETE" | "MISSING";
};

interface TimesheetTableProps {
  setSelectedWeek: (week: number) => void;
}

const timesheets: Timesheet[] = [
  { week: 1, date: "1 - 5 January, 2024", status: "COMPLETED" },
  { week: 2, date: "8 - 12 January, 2024", status: "COMPLETED" },
  { week: 3, date: "15 - 19 January, 2024", status: "INCOMPLETE" },
  { week: 4, date: "22 - 26 January, 2024", status: "COMPLETED" },
  { week: 5, date: "28 January - 1 February, 2024", status: "MISSING" },
];

const getStatusStyle = (status: Timesheet["status"]) => {
  switch (status) {
    case "COMPLETED":
      return "bg-green-100 text-green-700";
    case "INCOMPLETE":
      return "bg-yellow-100 text-yellow-700";
    case "MISSING":
      return "bg-pink-100 text-pink-700";
  }
};

const TimesheetTable: React.FC<TimesheetTableProps> = ({ setSelectedWeek }) => {
  return (
    <div className="w-full max-w-6xl xl:max-w-6xl mx-auto bg-white border border-gray-200 rounded-lg p-6 shadow-sm mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Timesheets</h2>

      <div className="w-full rounded-lg border border-gray-200 shadow-sm bg-white overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-sm">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-600 uppercase text-xs">
                <th className="px-4 py-4">Week #</th>
                <th className="px-4 py-4">Date</th>
                <th className="px-4 py-4">Status</th>
                <th className="px-4 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {timesheets.map((sheet) => (
                <tr key={sheet.week} className="border-t border-gray-200">
                  <td className="px-4 py-5 text-black">{sheet.week}</td>
                  <td className="px-4 py-5 text-gray-500">{sheet.date}</td>
                  <td className="px-4 py-5">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-md ${getStatusStyle(
                        sheet.status
                      )}`}
                    >
                      {sheet.status}
                    </span>
                  </td>
                  <td className="px-4 py-5 text-blue-600">
                    <button
                      className="hover:underline"
                      onClick={() => setSelectedWeek(sheet.week)}
                    >
                      {sheet.status === "COMPLETED"
                        ? "View"
                        : sheet.status === "INCOMPLETE"
                        ? "Update"
                        : "Create"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TimesheetTable;
