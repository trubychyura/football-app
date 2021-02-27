import React from 'react';
import { Col } from 'react-bootstrap';
import { fetchTeamData } from '../../helper/fetchData';
import { spinnerList } from '../../helper/config';
import { useFetchData } from '../../hooks/useFetchData';
import { useRouter } from '../../hooks/useRouter';

import Spinner from '../General/Spinner';
import ProfileHeader from './ProfileHeader';
import ProfileBody from './ProfileBody';

const { profileSpinner } = spinnerList;

const TeamProfile = () => {
  const {
    params: { teamId },
  } = useRouter();

  const spinnerName = profileSpinner.name;

  const team = useFetchData(fetchTeamData, [], spinnerName, teamId);

  return (
    <Col lg={8} className='border rounded p-2 m-auto'>
      <Spinner {...profileSpinner}>
        <ProfileHeader name={team.shortName} url={team.crestUrl} />
        <ProfileBody data={team} />
      </Spinner>
    </Col>
  );
};

export default TeamProfile;
