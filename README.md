# Timesheet Dashboard

## 🛠️ Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/timesheet-dashboard.git
   cd timesheet-dashboard
   ```

2. **Install dependencies**
   Make sure you have `node` and `npm` installed. Then run:

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Visit the app**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Frameworks & Libraries Used

* **Next.js** – React framework for server-side rendering and routing
* **React** – Frontend component library
* **Tailwind CSS** – Utility-first CSS framework for styling
* **TypeScript** – Typed superset of JavaScript

---

## 🧠 Assumptions & Notes

* The dashboard allows switching between a **Timesheet Table** view and a **Timesheet Detail** view.
* Clicking `View` on a table row opens the detailed view of that week's timesheet.
* "Add New Task" opens a modal to add hours for that week.
* Static data is currently used. 

---

## ⏱️ Time Spent

**\~2 to 3 hours**, including:

* Component setup (table, modal, container)
* State management for week selection and modal visibility
* UI styling with Tailwind
* Responsive adjustments and layout polishing

---

## 📂 Folder Structure (Simplified)

```
/Component
  ├── AddModal.tsx
  ├── TimesheetContainer.tsx
  └── TimesheetTable.tsx
/pages
  └── dashboard.tsx
/styles
  └── globals.css
```

---


