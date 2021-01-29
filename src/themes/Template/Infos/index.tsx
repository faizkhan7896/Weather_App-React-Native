import React from 'react';
import { FetchCurrentDTO } from '../../../dtos/FetchCurrentDTO';
import DataGrid from '../../organisms/DataGrid';
import DegreeRow from '../../organisms/DegreeRow';
import LocalDataRow from '../../organisms/LocalDataRow';
import { Container } from './styles';

interface Props {
  data: FetchCurrentDTO;
  requestLocation: () => void;
}

const Infos = ({ data, requestLocation }: Props): React.FC => {
  return (
    <Container>
      <LocalDataRow
        fullDate={data?.dt}
        local={data ? `${data?.name},${data?.sys.country}` : ''}
      />
      <DegreeRow
        degree={data?.main.temp}
        icon={data?.weather[0].icon}
        weather={data?.weather[0].description}
        requestLocation={requestLocation}
      />
      <DataGrid fetchCurrent={data} />
    </Container>
  );
};

export default Infos;
