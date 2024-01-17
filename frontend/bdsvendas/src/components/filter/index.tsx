/* eslint-disable prettier/prettier */

import './styles.css';
import { useEffect, useState } from 'react';
import { Store } from '../../types';
import { makeRequest } from '../../request';
import ReactSelect from 'react-select';

function Filter() {
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
        <div className=" mb-4">
       
          <ReactSelect
            name="store"
            options={selectStore}
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
