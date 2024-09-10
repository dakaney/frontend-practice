const fetchDefinition = async ({ queryKey}) => {
    const [_, search] = queryKey;  // eslint-disable-line
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`);
    const data = await response.json();
    return data;
  };
  
export default fetchDefinition;