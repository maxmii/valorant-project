export type FilterButtonsProps = {
    selectedFilter: string;
    setSelectedFilter: (filter: string) => void;
    filter: {name: string; value: string}[];
};