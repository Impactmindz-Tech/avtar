import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Sun", earnings: 40 },
  { name: "Mon", earnings: 70 },
  { name: "Tue", earnings: 100 },
  { name: "Wed", earnings: 100 },
  { name: "Thu", earnings: 30 },
  { name: "Fri", earnings: 60 },
  { name: "Sat", earnings: 80 },
];

export function EarningChart() {
  return (
    <div className="w-full lg:max-w-full  max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Earnings</h2>
        <select className="text-sm border rounded p-1">
          <option>Last week</option>
          {/* Add more options here if needed */}
        </select>
      </div>
      <ResponsiveContainer width="100%" height={400} className="h-[400px] sm:h-[50px] md:h-[300px] lg:h-[400px]">

    
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="earnings" fill="#000" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
