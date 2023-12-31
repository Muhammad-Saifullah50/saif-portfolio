import { technologies } from "@/constants"
import { BallCanvas } from "."

const Tech = () => {
  // console.log(technologies)
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 max-w-7xl mx-auto padding'>
      
        {technologies.map((technology) => (
          <div className="w-28 h-28 hidden lg:block"
            key={technology.name}
          >
            <BallCanvas
              icon={technology.icon}
            />
            <p className="text-center text-secondary">{technology.name}</p>
          </div>
        ))}
      
    </div>
  )
}

export default Tech