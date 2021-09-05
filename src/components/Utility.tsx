import { RandomBtn,ClearBtn } from "../stores/PixelPainterStore"
const Utility = () => {
  return (
    <div className="flex justify-center space-x-3">
      <button className="w-36" onClick = {()=>ClearBtn()}>Clear</button>
      <button className="w-36" onClick = {()=>RandomBtn()}>Random color</button>
    </div>
  )
}

export default Utility