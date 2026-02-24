import LeftContent from "./leftContent/LeftContent";
import RightContent from "./rightContent/RightContent";

const Page = () => {
  return (
    <div className="flex flex-row">
      <LeftContent />
      <RightContent />
    </div>
  );
};

export default Page;
