/* eslint-disable prettier/prettier */

import './styles.css';
import { useEffect, useState } from 'react';
import { FilterData, Store } from '../../types';
import { makeRequest } from '../../request';
import Select from 'react-select';


type Props = {
  onFilterChange: (filter: FilterData) => void;
};

function Filter({ onFilterChange }: Props) {
  const [selectStore, setSelectStore] = useState<Store[]>([]);



  useEffect(() => {
    makeRequest({
      url: '/stores',
      method: 'GET'
    }).then((response) => {
      console.log(response.data);
      setSelectStore(response.data)
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps



  }, []);





  return (
    <>
      <div className="filter-container base-card ">
        <div className="filter-store mb-4">

          <Select


            name="store"
            options={selectStore}
            onChange={(event) => onFilterChange({ storeId: event?.id })}
            classNamePrefix="filter-store-select"
            isClearable
            placeholder="Selecione a loja"
            getOptionLabel={(option: Store) => option.name}
            getOptionValue={(option: Store) => String(option.id)}
            formatOptionLabel={(store) =>
              <span>{store.name}</span>
            }
          />


        </div>


      </div>
    </>
  );
}

export default Filter;
