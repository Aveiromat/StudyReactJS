// App.jsx
import React, { useState } from 'react';
import styles from './Form.module.css';

const App = () => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [imc, setIMC] = useState(null);

    const calcularIMC = () => {
        if (altura && peso) {
            const alturaMetros = altura / 100;
            const calculoIMC = peso / (alturaMetros * alturaMetros);
            setIMC(calculoIMC.toFixed(2));
        }
    };

    const getClassificacao = () => {
        if (!imc) return '';
        if (imc < 18.5) return 'Abaixo do peso';
        else if (imc < 24.9) return 'Peso normal';
        else if (imc < 29.9) return 'Sobrepeso';
        else if (imc < 34.9) return 'Obesidade Grau I';
        else if (imc < 39.9) return 'Obesidade Grau II';
        else return 'Obesidade Grau III';
    };

    return (
        <div className={styles.container}>
            <h1>Calculadora de IMC</h1>
            <form>
                <label>
                    Altura (cm):
                    <input
                        type="number"
                        value={altura}
                        onChange={(e) => setAltura(e.target.value)}
                    />
                </label>
                <label>
                    Peso (kg):
                    <input
                        type="number"
                        value={peso}
                        onChange={(e) => setPeso(e.target.value)}
                    />
                </label>
                <button type="button" onClick={calcularIMC}>
                    Calcular IMC
                </button>
            </form>
            {imc !== null && (
                <div className={styles.resultContainer}>
                    <h2>Seu IMC é: {imc}</h2>
                    <p className={styles.classificacao}>Classificação: {getClassificacao()}</p>
                </div>
            )}
        </div>
    );
};

export default App;
