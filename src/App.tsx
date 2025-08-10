const App = () => {
  return (
    <main className="p-8">
      <h1 className="font-zentry mb-8 text-5xl font-bold text-violet-300">Gaming Website</h1>

      {/* Custom colors */}
      <div className="space-y-4">
        <h2 className="mb-4 text-2xl font-bold">Testing Custom Colors:</h2>

        <div className="border-custom-blue bg-custom-blue-light border-l-4 p-4">
          <p className="text-custom-blue font-bold">Custom Blue: #4FB7DD</p>
          <p className="text-sm">Using: text-custom-blue class</p>
        </div>

        <div className="border-custom-violet border-l-4 bg-gray-900 p-4">
          <p className="text-custom-violet font-bold">Custom Violet: #5724FF</p>
          <p className="text-sm text-gray-300">Using: text-custom-violet class</p>
        </div>

        <div className="border-custom-yellow border-l-4 bg-gray-800 p-4">
          <p className="text-custom-yellow font-bold">Custom Yellow: #EDFF66</p>
          <p className="text-sm text-gray-300">Using: text-custom-yellow class</p>
        </div>
      </div>
    </main>
  )
}

export default App
