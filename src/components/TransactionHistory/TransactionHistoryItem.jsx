import css from './TransactionHistory.module.css';

export function TransactionHistoryItem({ type, amount, currency }) {
  return (
    <tr className={css.tableRow}>
      <td className={css.tableData}>{type}</td>
      <td className={css.tableData}>{amount}</td>
      <td className={css.tableData}>{currency}</td>
    </tr>
  );
}
