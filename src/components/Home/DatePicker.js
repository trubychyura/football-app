import React from 'react';
import { Form } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { FcCalendar } from 'react-icons/fc';
import { DAY_NAMES, DEFAULT_SELECT_RANGE } from './../../helper/config';
import { getDate, formDate } from './../../helper/helper';
import { useRouter } from './../../hooks/useRouter';

const DatePicker = () => {
  const { query, push, pathname, stringify } = useRouter();

  const handleSelectChange = (event) => {
    push({
      pathname,
      search: stringify({ ...query, date: event.target.value, status: 'all' }),
    });
  };
  return (
    <Form className='d-flex mb-2 mb-sm-0 align-items-center '>
      <Form.Label className='m-0 mr-2'>
        <IconContext.Provider value={{ size: '2rem' }}>
          <FcCalendar />
        </IconContext.Provider>
      </Form.Label>
      <Form.Control
        as='select'
        value={query.date || formDate()}
        onChange={(val) => handleSelectChange(val)}
        custom
      >
        {new Array(10).fill(null).map((_, index) => {
          const date = formDate(index - DEFAULT_SELECT_RANGE / 2);
          const { numberDay, day, month } = getDate(date);

          return (
            <option value={date} key={index}>
              {`${DAY_NAMES[numberDay]}, ${day}/${month}`}
            </option>
          );
        })}
      </Form.Control>
    </Form>
  );
};

export default DatePicker;
