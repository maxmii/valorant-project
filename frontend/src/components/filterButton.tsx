import type {FilterButtonsProps} from '../types/filterButtonsProps.type';

const FilterButtons: React.FC<FilterButtonsProps> = ({
  selectedFilter,
  setSelectedFilter,
  filter,
}) => {
  return (
    <div className="filter-button">
      {filter.map((role) => (
        <button
          key={role.name}
          value={role.value}
          onClick={(e) => setSelectedFilter(e.currentTarget.value)}
          className={selectedFilter === role.value ? 'active-button' : ''}
        >
          {role.name}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
