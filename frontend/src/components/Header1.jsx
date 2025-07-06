export default function Header() {
  return (
    <div className="flex justify-between items-center mb-4">
      <div>
        <h1 className="text-xl font-semibold">Hello Jay</h1>
        <p className="text-sm text-gray-500">What are you having today?</p>
      </div>
      <img
        src="https://i.pravatar.cc/40"
        alt="avatar"
        className="w-10 h-10 rounded-full"
      />
    </div>
  );
}
