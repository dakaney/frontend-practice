import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchDefinition from "./fetchDefinition";
import Definition from "./Definition";

function Dictionary() {
  const [search, setSearch] = useState('');
	const [definition, setDefinition] = useState([]);
	const { data, refetch } = useQuery(['define',search], fetchDefinition, { enabled: false });

  useEffect(() => {
    document.title = 'Dictionary';
  }, []);

	useEffect(() => {
    setDefinition(data);
  }, [data]);

	const handleOnClick = () => {
		refetch();
		setDefinition(data);
	}

	const startPhonetics = () => {
		let audio = new Audio(definition[0].phonetics[0].audio);
		for (let i = 0; i < definition[0].phonetics.length; i++) {
			let currentAudio = definition[0].phonetics[i].audio
			if (currentAudio.length) audio = new Audio(currentAudio)
		}
		console.log(definition);
		audio.play();
	}

  return (
    <div>
        <input className="search-input" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Define"></input>
				<button className="search-button" onClick={handleOnClick}>Search</button>
				<div className="definition-container">
					{definition?.length > 0 && 
						<div>
							<p className="word-title">{definition[0].word}</p>
							<button onClick={startPhonetics} className="phonetics">{definition[0].phonetic}</button>
							{definition[0].meanings.map(wordMeaning => {
								return <Definition key={wordMeaning.partOfSpeech} data={wordMeaning} />
							})}
						</div>
					}
				</div>
    </div>
  )
}

export default Dictionary;
