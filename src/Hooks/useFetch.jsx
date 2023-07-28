import React from 'react';

const useFetch = () => {
  const [dados, setDado] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setLoading(true);
      setError(null);
      response = await fetch(url, options);
      json = await response.json();
      if (response.ok === false) {
        throw new Error(json.message);
      }
    } catch (err) {
      json = null;
      setError('Error: ' + err.message);
    } finally {
      setLoading(false);
      setDado(json);
      return { json, request };
    }
  }, []);

  return { dados, error, loading, request };
};

export default useFetch;
