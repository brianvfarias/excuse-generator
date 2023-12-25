import { ExcuseInfo } from "../App";

export function ExcuseDisplay({ id, excuse, category }: ExcuseInfo) {
  return (
    <div>
      <p>Excuse #{id} for the category {category}:</p>
      <p>{excuse}</p>
    </div>
  )
}