import { useState, useEffect } from 'react';
import axios from 'axios';

const CustomHook = (api) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(api)
      .then(response => setData(response.data))
      .catch(error => console.log(error))
  }, [api]);

  return data;
};

export { CustomHook };

