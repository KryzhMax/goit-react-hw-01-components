import css from './TransactionHistory.module.css';
import { TransactionHistoryItem } from './TransactionHistoryItem';
import PropTypes from 'prop-types';

export function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.tableHead}>
        <tr className={css.tableHeaderLine}>
          <th className={css.tableHeaderItem}>Type</th>
          <th className={css.tableHeaderItem}>Amount</th>
          <th className={css.tableHeaderItem}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TransactionHistoryItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ),
};
