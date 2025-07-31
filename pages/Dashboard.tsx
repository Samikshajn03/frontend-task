"use client";
import React, { useState } from "react";
import "../src/app/globals.css";
import TimesheetTable from "../Component/TimesheetTable";
import TimesheetContainer from "../Component/TimesheetContainer";
import AddModal from "../Component/AddModal";
import Footer from "../Component/Footer";
import Header from "../Component/Header";

const Dashboard: React.FC = () => {
  const [selectedWeek, setSelectedWeek] = useState<null | number>(null);
  const [showTaskModal, setShowTaskModal] = useState(false);

  const handleAddTaskClick = () => {
    setShowTaskModal(true);
  };

  const handleCloseModal = () => {
    setShowTaskModal(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <Header />

      {/* Content */}
      <main className="px-4 py-8 max-w-6xl mx-auto">
        {selectedWeek !== null ? (
          <TimesheetContainer onAddTaskClick={handleAddTaskClick} />
        ) : (
          <TimesheetTable setSelectedWeek={setSelectedWeek} />
        )}

        {showTaskModal && (
          <AddModal isOpen={showTaskModal} onClose={handleCloseModal} />
        )}
      </main>

      {/* Footer with top margin */}
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
