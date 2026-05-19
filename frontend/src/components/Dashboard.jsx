import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Dashboard({ transactions }) {
    const income = transactions
        .filter((t) => t.type === 'income')
        .reduce((sum, t) => sum + t.amount, 0);

    const expenses = transactions
        .filter((t) => t.type === 'expense')    
        .reduce((sum, t) => sum + t.amount, 0);

    const balance = income - expenses;

    const data = [
        { name: 'Income', value: income },
        { name: 'Expenses', value: expenses },
    ];

    const COLORS = ['#4CAF50', '#F44336'];

    return (
        <div className="dashboard">
        <div className="stats">
            <div className="stat-card income">
                <h3>Total Income</h3>
                <p>KSh {income.toLocaleString()}</p>
            </div>
            <div className="stat-card expense">
                <h3>Total Expenses</h3>
                <p>KSh {expenses.toLocaleString()}</p>
            </div>
            <div className="stat-card balance">
                <h3>Balance</h3>
                <p>KSh {balance.toLocaleString()}</p>
            </div>
        </div>

        {transactions.length > 0 && (
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        dataKey="value"
                        label
                    >
                        {data.map((entry, index) => (
                            <Cell key={index} fill={COLORS[index]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        )}
        </div>
    );
}

export default Dashboard;