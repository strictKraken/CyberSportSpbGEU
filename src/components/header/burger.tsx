type Props = {
  isOpen: boolean;
};

const Burger = () => {
  return (
    <div className="cursor-pointer">
      <svg
        width="31"
        height="17"
        viewBox="0 0 31 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 11L23 11L18.0932 17L0 17V11Z" fill="white"></path>
        <path d="M0 0L31 0L26.0179 6L0 6V0Z" fill="white"></path>
      </svg>
    </div>
  );
};

export default Burger;
