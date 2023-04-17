import PropTypes from 'prop-types';
import { FilterInput, FilterLabel } from './Filter.styled';
export function Filter({ value, onChange }) {
  return (
    <FilterLabel>
      Find by name
      <FilterInput
        type="text"
        name="filter"
        onChange={onChange}
        value={value}
      />
    </FilterLabel>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
