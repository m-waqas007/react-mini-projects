import { useState } from 'react';

function MoodTracker() {
  const [mood, setMood] = useState('');

  const moodMessages = {
    happy: "😊 Glad you're feeling good!",
    meh: "😐 Hope things brighten up.",
    sad: "😞 Sending you a warm hug.",
  };

  const moodStyles = {
    happy: 'bg-green-100 text-green-700 border-green-300',
    meh: 'bg-yellow-100 text-yellow-700 border-yellow-300',
    sad: 'bg-blue-100 text-blue-700 border-blue-300',
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full mx-auto mt-10 p-8 bg-white rounded-2xl shadow-lg text-center transform transition-all duration-300">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          How are you feeling today?
        </h2>

        <div className="flex justify-center gap-4 mb-6">
          {['happy', 'meh', 'sad'].map((m) => (
            <button
              key={m}
              onClick={() => setMood(m)}
              className={`flex items-center px-4 py-2 rounded-full border-2 font-medium text-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2
                ${mood === m ? moodStyles[m] : 'bg-gray-50 text-gray-600 border-gray-300 hover:bg-gray-100'}`}
              aria-pressed={mood === m}
              aria-label={`Select ${m} mood`}
            >
              {m === 'happy' && '😊'}
              {m === 'meh' && '😐'}
              {m === 'sad' && '😞'}
              <span className="ml-2 capitalize">{m}</span>
            </button>
          ))}
        </div>

        {mood && (
          <p
            className={`text-lg font-medium ${moodStyles[mood]} p-4 rounded-lg transition-opacity duration-300`}
            role="alert"
          >
            {moodMessages[mood]}
          </p>
        )}
      </div>
    </div>
  );
}

export default MoodTracker;