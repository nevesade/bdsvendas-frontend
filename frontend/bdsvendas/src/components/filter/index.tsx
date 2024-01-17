import './styles.css';

function Filter() {
  return (
    <>
      <div className="filter-container base-card ">
        <select>
          <option value="">Selecione uma cidade</option>
          <option value="1">Uberaba</option>
          <option value="2">Uberlândia</option>
          <option value="3">Araguari</option>
          <option value="4">Ituiutaba</option>
        </select>
      </div>
    </>
  );
}

export default Filter;
