import { BoltIcon } from "@heroicons/react/24/outline"

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-[#DDE6ED] px-2">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>   
      <div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8 text-[#DDE6ED]" />
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">"Ask your Questions"</p>
            <p className="infoText">"Suggest Fun activites"</p>
            <p className="infoText">"Brainstorm Edge cases"</p>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default HomePage