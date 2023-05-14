

function App() {

  return (
    <div className=" bg-slate-300 min-h-screen">
      <main className="container mx-auto max-w-[300px] py-14">
        <div className="container mx-auto py-3 bg-white rounded-2xl">
          <div className="px-4">
            <img src="src/assets/images/image-qr-code.png" alt="QR" className="w-full rounded-lg h-auto" />
          </div>
          <article className=" p-6 text-center ">
              <p className="font-bold pb-4 text-blue-950">Improve your front-end <br/> skills by building projects</p>
              <p className="text-gray-400">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
          </article>
        </div>
      </main>
    </div>
  )
}

export default App
