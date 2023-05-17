import { FC, ReactNode } from "react";

interface Props {
  onClick: () => {};
  loading?: boolean;
  children?: ReactNode;
};

const Button: FC<Props> = ({ children, onClick, loading }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      onClick={onClick}
      disabled={loading}
    >
      {children}
    </button>
  );
};

export default Button;
