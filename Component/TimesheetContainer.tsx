interface TimesheetContainerProps {
  onAddTaskClick: () => void;
}

const TimesheetContainer: React.FC<TimesheetContainerProps> = ({ onAddTaskClick }) => {
  const days = [21, 22, 23, 24, 25];
  const tasks = [
    { taskName: "Homepage Development", hours: 4, project: "Project Name" },
    { taskName: "Bug fixing", hours: 3, project: "Project Name" },
  ];

  return (
    <div className="bg-white shadow-sm border border-gray-200 rounded-lg w-full max-w-6xl xl:max-w-7xl mx-auto mt-6">
      <div className="flex justify-between items-center px-6 pt-6 pb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">This week’s timesheet</h2>
          <p className="text-sm text-gray-500">21 - 26 January, 2024</p>
        </div>
        <div className="text-right">
          <span className="text-xs font-medium text-gray-700">20/40 hrs</span>
          <div className="w-28 h-1.5 bg-gray-200 rounded-full mt-1">
            <div className="w-1/2 h-full bg-orange-400 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="divide-y divide-gray-100">
        {days.map((day) => (
          <div key={day} className="p-6 space-y-3">
            <p className="text-sm font-medium text-gray-700">Jan {day}</p>
            <div className="space-y-2">
              {tasks.map((task, i) => (
                <div key={i} className="flex justify-between items-center border border-gray-200 rounded-lg px-4 py-2">
                  <div className="text-sm text-gray-800">{task.taskName}</div>
                  <div className="flex items-center gap-3 text-xs text-gray-600">
                    <span>{task.hours} hrs</span>
                    <span className="text-blue-600 font-medium">{task.project}</span>
                    <button className="text-gray-500 hover:underline">...</button>
                  </div>
                </div>
              ))}

              <button
                onClick={onAddTaskClick}
                className="w-full border border-dashed border-gray-300 rounded-lg text-sm text-blue-500 py-2 hover:bg-blue-50"
              >
                + Add new task
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimesheetContainer;
