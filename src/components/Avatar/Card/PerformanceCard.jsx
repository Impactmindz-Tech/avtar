export default function PerformanceCard({ icon, title, desc }) {
  return (
    <div className="flex flex-col  items-center p-2 w-[25%]">
      <div className=" my-5 ">
        <img src={icon} alt={icon} className="w-[50px]" />
      </div>
      <div className="text">
        <h1 className="text-3xl">{title}</h1>
        <p className="font-semibold">{desc}</p>
      </div>
    </div>
  );
}
