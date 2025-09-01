import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  return (
    <div className="flex  flex-col min-h-screen bg-gray-100">
      <main className="flex-1 p-6">
        <header className="flex justify-center items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Text Summarizer
          </h2>
        </header>

        <div className="bg-white p-6 rounded-2xl shadow mb-6">
          <textarea
            className="w-full h-40 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none resize-none"
            placeholder="Paste your text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <div className="flex justify-end mt-4">
            <button
              className="px-6 py-2 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700"
              onClick={() => {
                const summarizedText =
                  text.slice(0, 100) + (text.length > 100 ? "..." : "");
                setSummary(summarizedText);
              }}
            >
              Summarize
            </button>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Summary</h3>
          <p className="text-gray-600">
            {summary ||
              "Your summarized text will appear here after processing."}
          </p>
        </div>
      </main>
      <footer className="bg-gray-200 text-gray-700 text-center py-4 mt-6 rounded-t-xl">
        Developed by Faizan Khan &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;
