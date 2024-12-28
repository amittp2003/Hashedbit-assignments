import { useState, useEffect } from 'react';

export default function IPLTable() {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchIPLData();
  }, []);

  const fetchIPLData = async () => {
    try {
      const response = await fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data');
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      const sortedData = [...data].sort((a, b) => b.NRR - a.NRR);
      setTableData(sortedData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '20px' }}>Loading...</div>;
  }

  if (error) {
    return <div style={{ color: 'red', textAlign: 'center', padding: '20px' }}>Error: {error}</div>;
  }

  return (
    <div style={{ margin: '20px auto', maxWidth: '1000px', padding: '0 20px' }}>
      <h1 style={{ 
        textAlign: 'center', 
        fontSize: '24px', 
        fontWeight: 'bold',
        margin: '20px 0'
      }}>
        IPL 2022 Points Table
      </h1>
      
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8f9fa' }}>
              <th style={{ border: '1px solid #ddd', padding: '12px' }}>Team</th>
              <th style={{ border: '1px solid #ddd', padding: '12px' }}>Matches</th>
              <th style={{ border: '1px solid #ddd', padding: '12px' }}>Won</th>
              <th style={{ border: '1px solid #ddd', padding: '12px' }}>Lost</th>
              <th style={{ border: '1px solid #ddd', padding: '12px' }}>NRR</th>
              <th style={{ border: '1px solid #ddd', padding: '12px' }}>Points</th>
              <th style={{ border: '1px solid #ddd', padding: '12px' }}>Last 5</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((team, index) => (
              <tr 
                key={index} 
                style={{ 
                  backgroundColor: index % 2 === 0 ? 'white' : '#f8f9fa',
                  ':hover': { backgroundColor: '#f5f5f5' }
                }}
              >
                <td style={{ border: '1px solid #ddd', padding: '12px' }}>{team.Team}</td>
                <td style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'center' }}>{team.Matches}</td>
                <td style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'center' }}>{team.Won}</td>
                <td style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'center' }}>{team.Lost}</td>
                <td style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'center' }}>{team.NRR.toFixed(3)}</td>
                <td style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'center' }}>{team.Points}</td>
                <td style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'center' }}>{team.Last_5}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}