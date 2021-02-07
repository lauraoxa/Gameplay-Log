import {Button} from '../../elements/buttons';

function Filter() {
  return (
    <div className="filter">
      <div className="filter--top">
        <label htmlFor="type"></label>
        <select name="type">
          <option default>select...</option>
          <option>PlayStation 2</option>
        </select>
        <Button type="submit">{"filter"}</Button>
      </div>
    </div>
  );
}

export default Filter;