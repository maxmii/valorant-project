type RoleButtonsProps = {
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
  filter: {name: string; value: string}[];
};

export function RoleButtons({
  selectedFilter,
  setSelectedFilter,
  filter,
}: RoleButtonsProps) {
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
}
