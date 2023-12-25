interface CreateExcuseProps {
  category: string
  getExcuse: (e: string) => void
}


export function CreateExcuse({ category, getExcuse }: CreateExcuseProps) {
  return (<button onClick={(e) => {
    e.preventDefault()
    getExcuse(e.currentTarget.innerText)
  }}>{category}</button>)
}