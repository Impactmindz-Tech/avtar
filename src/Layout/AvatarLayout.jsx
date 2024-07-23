
import Header from "@/components/UserHeader/Header";

const AvatarLayout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      {children}
    </div>
  );
};

export default AvatarLayout;
