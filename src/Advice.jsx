import { useState, useEffect } from "react";
import patternDivider from "./assets/pattern-divider.svg";
import diceIcon from "./assets/icon-dice.svg";

import { useQuery } from "@tanstack/react-query";
import fetchAdvice from "./fetchAdvice";

function Advice() {
  const [result, setResult] = useState([]);
  const { data, refetch } = useQuery([], fetchAdvice, { enabled: true });

  const handleClick = () => {
    refetch();
    setResult(data);
  };

  useEffect(() => {
    setResult(data);
  }, [data]);

  useEffect(() => {
    document.title = 'Advice';
  }, []);

  return (
    <div className='advice-container'>
        <div className="card">
        <h2 className="advice-id">ADVICE #{result?.id}</h2>
        <p className="advice">&quot;{result?.advice}&quot;</p>
        <img className="divider" src={patternDivider} alt="divider"/>
        <div className="dice-icon">
            <button className="icon-button" onClick={handleClick}>
            <img className="dice" src={diceIcon}/>
            </button>
        </div>
        </div>
    </div>
  )
}

export default Advice;
