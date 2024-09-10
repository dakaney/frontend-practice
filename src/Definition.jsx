function Definition(data) {
    const info = data.data;
  return (
    <div className="definition-list">
        <h2>{info.partOfSpeech}</h2>
        <br />
        <h3>Meaning</h3>
        {info.definitions.map(wordDefinitions => {
            return <li key={wordDefinitions.definition}>{wordDefinitions.definition}</li>
        })}
    </div>
  )
}

export default Definition;

