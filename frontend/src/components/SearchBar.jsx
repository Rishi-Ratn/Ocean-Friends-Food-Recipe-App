import { useRef, useState } from "react";
import { Mic } from "lucide-react";


export default function SearchBar({ onSearch }) {
  const inputRef = useRef();
  const [listening, setListening] = useState(false);


  const handleVoiceSearch = () => {
    const recognition = new window.webkitSpeechRecognition();
    setListening(true);
    recognition.onresult = (e) => {
      const rawQuery = e.results[0][0].transcript;
      const query = rawQuery.trim().replace(/\.$/, "");
      inputRef.current.value = query;
      onSearch(query);
      setListening(false);
    };

    recognition.onend = () => setListening(false); 
    

    recognition.start();
  };

  return (
    <div>
        <div className="flex gap-2 mb-4">
        <input
            type="text"
            placeholder="Search"
            ref={inputRef}
            onKeyDown={(e) => e.key === "Enter" && onSearch(inputRef.current.value)}
            className="flex-1 border rounded-lg px-3 py-2"
        />
        <button
            onClick={handleVoiceSearch}
            className="p-2 bg-green-600 text-white rounded-lg cursor-pointer"
        >
            <Mic size={20} />
        </button>
        </div>

        {listening && (
        <div className="text-sm text-gray-500 mb-2">🎙️ Listening... Please speak now.</div>
        )}
    </div>
  );
}
