import { ArrowLeft } from "lucide-react";

export default function Header2({ onBack }) {
  return (
    <div className="flex items-center justify-between mb-4">
    <button onClick={onBack} className="cursor-pointer">
        <ArrowLeft />
    </button>
    <h1 className="text-lg font-semibold mx-auto">Search recipes</h1>
    </div>

  );
}
