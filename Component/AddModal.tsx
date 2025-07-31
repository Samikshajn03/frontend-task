import React, { useState } from "react";

interface AddEntryModalProps {
  onClose: () => void;
  onSubmit: (entry: EntryData) => void;
}

interface EntryData {
  project: string;
  workType: string;
  description: string;
  hours: number;
}

const AddEntryModal: React.FC<AddEntryModalProps> = ({ onClose, onSubmit }) => {
  const [project, setProject] = useState("Project Name");
  const [workType, setWorkType] = useState("Bug fixes");
  const [description, setDescription] = useState("");
  const [hours, setHours] = useState(12);

  const handleSubmit = () => {
    onSubmit({ project, workType, description, hours });
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-white/60 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl">&times;</button>
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Add New Entry</h2>

        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Project <span className="text-red-500">*</span>
          </label>
          <select
            value={project}
            onChange={(e) => setProject(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-400"
          >
            <option>Project Name</option>
            <option>Another Project</option>
          </select>
        </div>

        {/* Type of Work */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Type of Work <span className="text-red-500">*</span>
          </label>
          <select
            value={workType}
            onChange={(e) => setWorkType(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-400"
          >
            <option>Bug fixes</option>
            <option>Feature development</option>
          </select>
        </div>

        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Task description <span className="text-red-500">*</span>
          </label>
          <textarea
            placeholder="Write text here ..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm h-24 resize-none text-gray-400"
          />
          <p className="text-xs text-gray-400 mt-1 ">A note for extra info</p>
        </div>

        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Hours <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setHours(Math.max(0, hours - 1))}
              className="w-8 h-8 border border-gray-300 rounded-md text-lg text-black"
            >−</button>
            <span className="w-10 text-center text-sm text-black">{hours}</span>
            <button
              onClick={() => setHours(hours + 1)}
              className="w-8 h-8 border border-gray-300 rounded-md text-lg text-black"
            >+</button>
          </div>
        </div>

        
        <div className="flex justify-between items-center">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700"
          >
            Add entry
          </button>
          <button
            onClick={onClose}
            className="border border-gray-300 text-gray-600 px-4 py-2 rounded-md text-sm hover:bg-gray-100"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEntryModal;
