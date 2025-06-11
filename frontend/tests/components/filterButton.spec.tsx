import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import FilterButtons from '../../src/components/filterButton';

describe('FilterButtons', () => {
  const filter = [
    { name: 'Duelist', value: 'duelist' },
    { name: 'Sentinel', value: 'sentinel' },
    { name: 'Initiator', value: 'initiator' },
  ];

  it('renders all filter buttons', () => {
    const setSelectedFilter = jest.fn();
    render(
      <FilterButtons
        selectedFilter="duelist"
        setSelectedFilter={setSelectedFilter}
        filter={filter}
      />
    );
    filter.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  it('highlights the selected filter', () => {
    const setSelectedFilter = jest.fn();
    render(
      <FilterButtons
        selectedFilter="sentinel"
        setSelectedFilter={setSelectedFilter}
        filter={filter}
      />
    );
    const sentinelButton = screen.getByText('Sentinel');
    expect(sentinelButton).toHaveClass('active-button');
  });

  it('calls setSelectedFilter when a button is clicked', () => {
    const setSelectedFilter = jest.fn();
    render(
      <FilterButtons
        selectedFilter="duelist"
        setSelectedFilter={setSelectedFilter}
        filter={filter}
      />
    );
    const initiatorButton = screen.getByText('Initiator');
    fireEvent.click(initiatorButton);
    expect(setSelectedFilter).toHaveBeenCalledWith('initiator');
    expect(initiatorButton).toBeInTheDocument();
  });
});
