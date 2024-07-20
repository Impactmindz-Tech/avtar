import AvatarHeader from "@/components/Avatar/Header/AvatarHeader";

const AvatarLayout = ({ children }) => {
  return <div className="container"><AvatarHeader/>{children}</div>;
};

export default AvatarLayout;
