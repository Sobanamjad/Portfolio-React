import profile from "../../assets/img/edit-1.png"

const RightContent = () => {
  return (
    <div className="relative left-30 mt-10 w-130 h-130 rounded-full">
      <img
        src={profile}
        alt="Profile"
        className="w-110 h-110 absolute bottom-14 left-8 rounded-bl-2xl rounded-br-2xl grayscale"
      />
    </div>
  );
};

export default RightContent;
