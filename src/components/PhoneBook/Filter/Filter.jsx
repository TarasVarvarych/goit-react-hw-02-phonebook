import { FilterInput, FilterLabel } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice/filterSlice';
export function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onFilterChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };
  return (
    <FilterLabel>
      Find by name
      <FilterInput
        type="text"
        name="filter"
        onChange={onFilterChange}
        value={filter}
      />
    </FilterLabel>
  );
}
