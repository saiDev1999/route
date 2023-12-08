import axios from 'axios';
import {useEffect, useState} from 'react';
import {product_listing_api} from '../../../../endPoints/apis';

const useAxios = (endPoint) => {
    debugger
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(endPoint).then(response => {
      setData(response.data);
    });
  }, []);
  return [data]
};

export default useAxios;
