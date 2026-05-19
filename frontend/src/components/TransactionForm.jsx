import { useState } from 'react';

function TransactionForm({ onAdd }) {
    const [form, setForm] = useState({
        description: '',
        amount: '',
        type: 'income',
        category: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.description || !form.amount || !form.category) return;
        onAdd({ ...form, amount: Number(form.amount) });
        setForm({ description: '', amount: '', type: 'income', category: '' });
    };

    return (
        <div className="form-container">
            <h2>Add Transaction</h2>
            <form onSubmit={handleSubmit}>
                <input
                name="description"
                placeholder="Description"
                value={form.description}
                onChange={handleChange}
                />
                <input
                name="amount"
                placeholder="Amount"
                type='number'
                value={form.amount}
                onChange={handleChange}
                />
                <select name="type" value={form.type} onChange={handleChange}>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
                <input
                name="category"
                placeholder="Category  (e.g. Food, Salary)"
                value={form.category}
                onChange={handleChange}
                />
                <button type="submit">Add Transaction</button>
            </form>
        </div>
    );
}

export default TransactionForm;