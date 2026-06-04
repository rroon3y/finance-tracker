import { useState, useEffect } from 'react';
import axios from 'axios';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import Dashboard from './components/Dashboard';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/transactions';





function App() {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    const res = await axios.get(API);
    setTransactions(res.data);
  };

  useEffect(() => {
    const loadTransactions = async () => {
      const res = await axios.get(API);
      setTransactions(res.data);
    };
    loadTransactions();
  }, []);

  const addTransaction = async (data) => {
    await axios.post(API, data);
    fetchTransactions();
  };

  const deleteTransaction = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchTransactions();
  };

  return (
    <div className="app">
      <h1>💰 Finance Tracker</h1>
      <Dashboard transactions={transactions} />
      <TransactionForm onAdd={addTransaction} />
      <TransactionList transactions={transactions} onDelete={deleteTransaction} />
    </div>
  );
}

export default App;

