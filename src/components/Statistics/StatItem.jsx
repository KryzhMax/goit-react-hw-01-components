// import data from '../../data/data.json';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export function StatItems({ label, percentage }) {
  return (
    <li className={css.stat__item}>
      <span className={css.stat__label}>{label}</span>
      <span className={css.stat__percentage}>{percentage}</span>
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
