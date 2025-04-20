"use client";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};
export default function Button({ onClick, children }: ButtonProps) {
  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        {children}
      </button>
    </>
  );
}
