import { ArrowUp01Icon } from "lucide-react";
export default function Scrollbutton() {
  const handleClick = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="fixed z-50 flex flex-col items-start w-8 h-8 mb-4 mr-4 rounded-full bottom-4 right-4 hover:scale-110 hover:duration-300">
      <button
        className="p-2 rounded-md bg-stone-950/50 ring-1 ring-white/10"
        onClick={handleClick}
      >
        <ArrowUp01Icon className="w-6 h-6 text-white" aria-hidden="true" />
      </button>
    </div>
  );
}
