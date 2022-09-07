// import data from '../../data/data.json';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export function StatItems({ label, percentage }) {
  return (
    <li className={css.statItem}>
      <span className={css.statLabel}>{label}</span>
      <span className={css.statPercentage}>{percentage}</span>
    </li>
  );
}

StatItems.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
