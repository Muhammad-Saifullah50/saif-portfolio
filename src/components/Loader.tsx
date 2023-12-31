'use client'
import { Html, useProgress } from "@react-three/drei"

const CanvasLoader = () => {
  const { progress } = useProgress()
  return (<>
    <Html 
    as='div'
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'

    }}
    
    >
      <span className="canvas-loader"></span>
      <p className="text-sm text-[#f1f1f1] font-extrabold mt-10">{progress.toFixed(2)}%</p>
    </Html>
  </>)
}

export default CanvasLoader