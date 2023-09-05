import React, { useState } from "react";
import "../../Style/Form.css";

const Form = () => {
  // Define estados para los valores de los input
  const [salario, setSalario] = useState("");
  const [horasFeriadas, setHorasFeriadas] = useState("");
  const [horasNocturnas, setHorasNocturnas] = useState("");
  const [horasExtra, setHorasExtra] = useState("");
  const [total, setTotal] = useState(0);
  const [resultFeriadas, setResultFeriadas] = useState(0);
  const [resultNocturnas, setResultNocturnas] = useState(0);
  const [resultExtra, setResultExtra] = useState(0);

  const calcular = () => {
    const horas200 = 1;
    const horas50 = 0.50;
    const horas35 = 0.35;

    //variables para determinar costo de hora por dia
    const mediaDia = 21.69;
    const horasXdia = 8;

    const calc1 = salario / mediaDia / horasXdia;

    //calculo de horas al 200%
    const calc2 = calc1 * horas200;
    const resultHoras200 = Math.round(calc1 + calc2 ) * horasFeriadas;
    //calculo de horas al 50%
    const calc3 = Math.round(calc1 * horas50);
    const resultHoras50 = Math.round(calc1 + calc3) * horasNocturnas;
    //calculo de horas al 35%
    const calc4 = (calc1 * horas35);
    const resultHoras35 = Math.round(calc1 + calc4) * horasExtra;

    const resultadoTotal = resultHoras200 + resultHoras50 + resultHoras35;

    setResultFeriadas(resultHoras200);
    setResultNocturnas(resultHoras50);
    setResultExtra(resultHoras35);
    setTotal(resultadoTotal);
  };

  return (
    <div className="container">
      <h1 className="titulo">Cálculo de Horas Extra</h1>

      <div className="inputs card shadow">
        <h2 className="nameApp">XtraApp</h2>

        <input
          type="number"
          placeholder="Ingresa tu salario"
          className="input"
          value={salario}
          name="salario"
          onChange={(e) => setSalario(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Horas 200%"
          className="input"
          value={horasFeriadas}
          name="horasFeriadas"
          onChange={(e) => setHorasFeriadas(e.target.value)}
        />
        <input
          type="number"
          placeholder="Horas 50%"
          className="input"
          value={horasNocturnas}
          name="horasNocturnas"
          onChange={(e) => setHorasNocturnas(e.target.value)}
        />
        <input
          type="number"
          placeholder="Horas 35%"
          className="input"
          value={horasExtra}
          name="horasExtra"
          onChange={(e) => setHorasExtra(e.target.value)}
        />
        <input
          type="button"
          value="Calcular"
          className="btn"
          onClick={calcular}
        />
        <input
          type="button"
          value="Reset"
          className="reset"
          onClick={() => {
            setSalario("");
            setHorasFeriadas("");
            setHorasNocturnas("");
            setHorasExtra("");
            setTotal(0);
            setResultFeriadas(0);
            setResultNocturnas(0);
            setResultExtra(0);
          }}
        />
      </div>
      <main className="container_vista">
        <section className="section_vista">
          <div className="vista_input">
            <label htmlFor="">Horas al 200%</label>
            <input
              type="number"
              placeholder="Horas feriadas"
              className="input"
              disabled
              value={resultFeriadas}
            />
          </div>
          <div className="vista_input">
            <label htmlFor="">Horas al 50%</label>
            <input
              type="number"
              placeholder="Horas nocturnas"
              className="input"
              disabled
              value={resultNocturnas}
            />
          </div>
          <div className="vista_input">
            <label htmlFor="">Horas al 35%</label>
            <input
              type="number"
              placeholder="Horas extra"
              className="input"
              disabled
              value={resultExtra}
            />
          </div>
        </section>

        <section className="total">
        <label htmlFor="">TOTAL</label>
          <input
            type="number"
            placeholder="TOTAL"
            className="input"
            disabled
            value={total}
          />
        </section>
      </main>
    </div>
  );
};

export default Form;
