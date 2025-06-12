const App = () => {
  const appName = import.meta.env.VITE_APP_NAME;
  const firstMessage = import.meta.env.VITE_DEFAULT_WELCOME_MESSAGE;

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-amber-100 to-amber-300">
      <div className="bg-white rounded-xl shadow-lg p-10 mt-20 border-4 border-amber-300 max-w-xl text-center">
        <h1 className="text-5xl font-extrabold text-amber-600 mb-4 drop-shadow-lg">
          🚀 {appName} 🚀
        </h1>
        <p className="text-xl text-gray-700 mb-6">{firstMessage}</p>
        <div className="bg-amber-200 rounded-lg py-4 px-6 text-amber-900 font-semibold text-lg shadow-inner">
          <span>✨ Project Kickoff! ✨</span>
          <p className="mt-2 text-base text-amber-800">
            Stay tuned for updates as we build something awesome together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
