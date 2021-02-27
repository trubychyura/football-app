import React from 'react';
import { useRouter } from './../../hooks/useRouter';
import { Nav, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

const MatchFilter = () => {
  const { query, pathname, push, stringify } = useRouter();

  const handleFilterChange = (value) => {
    push({
      pathname,
      search: stringify({ ...query, status: value }),
    });
  };

  return (
    <ToggleButtonGroup
      type='radio'
      name='options'
      value={query.status || 'all'}
      onChange={(val) => handleFilterChange(val)}
    >
      <ToggleButton value='all' as={Nav.Item} variant='info'>
        All
      </ToggleButton>
      <ToggleButton value='finished' variant='info'>
        Results
      </ToggleButton>
      <ToggleButton value='scheduled' variant='info'>
        Schedule
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default MatchFilter;
