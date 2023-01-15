type Props = {
  isOpen: boolean;
};

const Burger = () => {
  return (
    <div className="cursor-pointer">
      <svg
        width="37"
        height="15"
        viewBox="0 0 37 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M37 0H0L3.58065 6H33.4194L37 0Z" fill="#6C48D1" />
        <path d="M31.5 9H5.5L9.21429 15H27.7857L31.5 9Z" fill="#6C48D1" />
      </svg>
    </div>
  );
};

export default Burger;
