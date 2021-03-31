import React, { useEffect } from "react";

function HistorySample({ history }) {
  const goBack = () => {
    history.goBack();
  };

  const goHome = () => {
    history.push("/");
  };

  useEffect(() => {
    console.log(history);
    const unblock = history.block("are you really leaving?");
    return () => {
      unblock();
    };
  }, [history]);

  return (
    <div>
      <button onClick={goBack}>go back</button>
      <button onClick={goHome}>go home</button>
    </div>
  );
}

export default HistorySample;
