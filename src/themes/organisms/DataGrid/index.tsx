import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { FetchCurrentDTO } from '../../../dtos/FetchCurrentDTO';
import DataComponent from '../../molecules/DataComponent';
import { DataBusiness } from './business';
import { Container } from './styles';

interface Props {
  fetchCurrent: FetchCurrentDTO;
}

const DataGrid = ({ fetchCurrent }: Props): React.FC => {
  const [dataToFlatList, setDataToFlatList] = useState([]);

  useEffect(() => {
    const data = DataBusiness(fetchCurrent);
    setDataToFlatList(data);
  }, [fetchCurrent]);

  return (
    <Container>
      <FlatList
        keyExtractor={(item, i) => `key${i}`}
        columnWrapperStyle={styles.row}
        data={dataToFlatList}
        numColumns={3}
        renderItem={({ item }) => (
          <DataComponent
            SVG={item.SVG || ''}
            type={item.type || ''}
            value={item.value || ''}
            measurement={item.measurement || ''}
          />
        )}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
});

export default DataGrid;
