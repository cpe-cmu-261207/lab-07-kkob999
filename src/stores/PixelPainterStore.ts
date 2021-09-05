import {Store} from 'pullstate'

const Allcolor =  ["#000000","#804000","#FE0000","#FE6A00","#FFD800","#00FF01","#FFFFFF","#01FFFF","#0094FE","#0026FF","#B100FE","#FF006E"]

type PixelPainterStoreType = {
  //we save painted color as hex code (string) in 2D array
  canvas: string[][],
  chooseColor: string
}

//return an (16 x 16) 2D array filled with "#FFFFFF"
const createEmptyCanvas = () => {
  const output: string[][] = []
  for (let i=0; i<16; i++){
    output[i] = []
    for (let j=0; j<16; j++){
      output[i].push('#FFFFFF')
    }
  }
  return output
}

export const PixelPainterStore = new Store<PixelPainterStoreType>({
  canvas: createEmptyCanvas(),
  chooseColor: '#000000'
})

export const SelectPainted = (color: string) => {
  PixelPainterStore.update( s => {s.chooseColor = color})
}

export const CellPaint = (x:number, y:number) => {
  PixelPainterStore.update( s => {s.canvas[y][x] = s.chooseColor})
}

export const ClearBtn = () => {
  PixelPainterStore.update(s => {s.canvas = createEmptyCanvas()})
}

export const CreateRandom = () => {
  const output: string[][] = []
  for (let i=0; i<16; i++){
    output[i] = []
    for (let j=0; j<16; j++){
      output[i].push( Allcolor[Math.floor(Math.random() * 12)] )
    }
  }
  return output
}

export const RandomBtn = () => {
  PixelPainterStore.update(s=>{s.canvas = CreateRandom()})
}