import { useState } from "react"
const BookForm = ({ onAdd }) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    const trimm = Field.trim()
    if (trimm.length === 0) return
    onAdd(trimm)
    setField("")
  }
 const [Field, setField] = useState("")
  
  return (
    <form onSubmit={handleSubmit} className="add-book-row">
      <input
        className="input"
        value={Field}
        onChange={(e) => setField(e.target.value)}
        placeholder="Название"
      />
      <button className="btn" type="submit">
        Добавить на полку
      </button>
    </form>
  )
}

export default BookForm