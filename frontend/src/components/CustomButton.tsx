interface CustomButtonProps {
  label: string;
  onClick: () => void;
}

export default function CustomButton({ label,onClick }: CustomButtonProps) {
  return (
    <div onClick={onClick} className="bg-primary text-white px-6 py-3 rounded-md cursor-pointer">
      {label}
    </div>
  );
}
