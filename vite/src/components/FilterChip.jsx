const FilterChip = () => {
return (
    <div className="list-toolbar">
      <span className="toolbar-title">Книги</span>
      <div className="filter-chip">
        <input type="checkbox" id="filterCheckbox" />
        <label htmlFor="filterCheckbox">
          <span className="dot" />
          Только непрочитанные
        </label>
      </div>
    </div>
)
}
export default FilterChip