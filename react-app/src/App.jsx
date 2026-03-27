import { useState, useEffect } from "react";

function Contador() {
  const [count, setCount] = useState(0);

  // useEffect para validar cambios
  useEffect(() => {
    if (count > 10) {
      alert("El contador no puede ser mayor a 10");
      setCount(10);
    }

    if (count < 0) {
      setCount(0);
    }
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Contador</h1>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>

      <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>
        Decrementar
      </button>
    </div>
  );
}

export default Contador;