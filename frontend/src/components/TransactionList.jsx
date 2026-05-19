function TramsactionList({ transactions, onDelete }) {
    if (transactions.length === 0) {
        return <p>No transactions yet. Add one above!</p>;
    }

    return (
        <div className="list-container">
            <h2>Transactions</h2>
            {transactions.map((t) => (
                <div key={t._id} className={`transaction-item ${t.type}`}>
                    <div className="transaction-info">
                        <span className="description">{t.description}</span>
                        <span className="category">{t.category}</span>
                    </div>
                    <div className="transaction-right">
                        <span className="amount">
                            {t.type === 'income' ? '+' : '-'} KSh {t.amount.toLocaleString()}
                        </span>
                        <button onClick={() => onDelete(t._id)}>🗑️</button>
                </div>
                </div>
            ))}
        </div>
    );
}

export default TramsactionList;