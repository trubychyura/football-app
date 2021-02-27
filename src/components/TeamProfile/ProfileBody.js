import React from 'react';
import { useState } from 'react';
import { ListGroup, Tab, Tabs, Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ProfileBody = ({ data }) => {
  const [key, setKey] = useState('info');

  const {
    area,
    address,
    phone,
    website,
    email,
    founded,
    clubColors,
    venue,
    squad,
  } = data;

  return (
    <>
      <Tabs
        id='controlled-tab-example'
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className='mb-2'
      >
        <Tab eventKey='info' title='Information' tabClassName='p-2'>
          <ListGroup
            className='px-4 py-2  font-weight-normal h5 mx-auto'
            variant='flush'
          >
            <ListGroup.Item>
              Country:
              <span className='ml-2 font-weight-bold'>{area && area.name}</span>
            </ListGroup.Item>

            <ListGroup.Item>
              Founded: <span className='ml-2 font-weight-bold'>{founded}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Club colors:{' '}
              <span className='ml-2 font-weight-bold'>{clubColors}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Coach:
              <span className='ml-2 font-weight-bold'>
                {squad && squad[squad.length - 1].name}
              </span>
            </ListGroup.Item>
            <ListGroup.Item>
              Stadium: <span className='ml-2 font-weight-bold'>{venue}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Addres: <span className='ml-2 font-weight-bold'>{address}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Phone:<span className='ml-2 font-weight-bold'>{phone}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Email: <span className='ml-2 font-weight-bold'>{email}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Website: <span className='ml-2 font-weight-bold'>{website}</span>
            </ListGroup.Item>
          </ListGroup>
        </Tab>
        <Tab eventKey='squad' tabClassName='p-2' title='Squad'>
          <Table>
            <thead>
              <tr>
                <th>Player</th>
                <th>Position</th>
                <th>Nationality</th>
                <th>Number</th>
              </tr>
            </thead>
            <tbody>
              {squad &&
                squad.map((player) => {
                  const {
                    id,
                    name,
                    position,
                    nationality,
                    shirtNumber,
                  } = player;
                  return (
                    <tr key={id}>
                      <td>{name}</td>
                      <td>{position || 'Coach'}</td>
                      <td>{nationality}</td>
                      <td>{shirtNumber || '-'}</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Tab>
      </Tabs>
    </>
  );
};

ProfileBody.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProfileBody;
