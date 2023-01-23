import '../styles/tokens-grid.css';

interface TokensGrid {
  tokens: Record<string, string>;
}

export function TokensGrid({ tokens }: TokensGrid) {
  return (
    <table className="tokens-grid">
      <thead>
        <th>Name</th>
        <th>Value</th>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
