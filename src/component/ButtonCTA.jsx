/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const ButtonCTA = ({ title, onClick = () => {} }) => {
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className={`font-poppins text-white bg-green-600  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2`}
      >
        {title}
      </button>
    </>
  );
};

export default ButtonCTA;
