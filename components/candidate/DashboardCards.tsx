export default function DashboardCards() {
  return (
    <div className="grid grid-cols-3 gap-6 mt-8">

      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-gray-500">Applications</h3>
        <p className="text-2xl font-bold mt-2">12</p>
      </div>

      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-gray-500">Profile Views</h3>
        <p className="text-2xl font-bold mt-2">34</p>
      </div>

      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-gray-500">Saved Jobs</h3>
        <p className="text-2xl font-bold mt-2">7</p>
      </div>

    </div>
  );
};