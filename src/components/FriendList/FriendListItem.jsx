import css from './FriendList.module.css';

export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={css.friend__item}>
      {isOnline ? (
        <span className={css.friend__online}>{isOnline}</span>
      ) : (
        <span className={css.friend__offline}>{isOnline}</span>
      )}

      <img
        className={css.friend__avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.friend__name}>{name}</p>
    </li>
  );
}
