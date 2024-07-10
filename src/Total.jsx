import React, { useState } from 'react';
import './Total.css'; // Assuming you save the CSS in Total.css

function Total() {
  const [numKm, setNumKm] = useState('');
  const [catAlle, setCatAlle] = useState('Nationnal');
  const [catRetour, setCatRetour] = useState('Nationnal');
  const [total, setTotal] = useState(0);

  const handleCalculate = () => {
    const km = parseFloat(numKm);
    if (isNaN(km)) {
      alert('Please enter a valid number for kilometers');
      return;
    }

    let calculatedTotal = ((km / 100) * 5) * 12.5;
    let additionalCost = 0;

    if (catAlle === 'Auto rout') {
      const tollCost = parseFloat(prompt('Auto rout selected for Trajet aller. Please enter the toll cost:'));
      if (isNaN(tollCost)) {
        alert('Invalid toll cost entered. Please enter a valid number.');
        return;
      }
      additionalCost += tollCost;
    }

    if (catRetour === 'Auto rout') {
      const tollCost = parseFloat(prompt('Auto rout selected for Trajet retour. Please enter the toll cost:'));
      if (isNaN(tollCost)) {
        alert('Invalid toll cost entered. Please enter a valid number.');
        return;
      }
      additionalCost += tollCost;
    }

    setTotal(calculatedTotal + additionalCost);
  };

  return (
    <div className="total-container">
      <h2>Total de deplacement (ONDH) :</h2>
      <div className="form-group">
        <label htmlFor="numKm">Donnez nombre kilométrage</label>
        <input
          id="numKm"
          type="number"
          value={numKm}
          onChange={(e) => setNumKm(e.target.value)}
          placeholder="km"
        />
      </div>
      <div className="form-group">
        <label htmlFor="catAlle">Trajet aller?</label>
        <select
          id="catAlle"
          value={catAlle}
          onChange={(e) => setCatAlle(e.target.value)}
        >
          <option value="Nationnal">Nationnal</option>
          <option value="Auto rout">Auto rout</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="catRetour">Trajet retour?</label>
        <select
          id="catRetour"
          value={catRetour}
          onChange={(e) => setCatRetour(e.target.value)}
        >
          <option value="Nationnal">Nationnal</option>
          <option value="Auto rout">Auto rout</option>
        </select>
      </div>
      <button onClick={handleCalculate}>Calculer</button>
      <div className="total">
        <h3>Total: {total.toFixed(2)} DHH</h3>
        <h3>Total par personne (4): {(total / 4).toFixed(2)} DH</h3>
      </div>
    </div>
  );
}

export default Total;
