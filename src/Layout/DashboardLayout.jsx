import Header from "@/components/UserHeader/Header";


const DashboardLayout = ({children}) => {
  return (
    <div className="container">
      <Header />
      {children}
    </div>
  );
};

export default DashboardLayout;
