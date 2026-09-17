import BookForm from "./BookForm"
import BookList from "./BookList"
import FilterChip from "./FilterChip"
const ShelfScreen = () =>  {
return (
<section className="screen active" id="screen-shelf">
    <p className="greeting">Добрый вечер</p>

<BookForm/>

<FilterChip/>

    <BookList/>
  
  </section>



)
}
export default ShelfScreen