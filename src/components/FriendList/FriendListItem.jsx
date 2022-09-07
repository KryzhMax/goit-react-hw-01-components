import css from './FriendList.module.css';

export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={css.friendItem}>
      {isOnline ? (
        <span className={css.friendOnline}>{isOnline}</span>
      ) : (
        <span className={css.friendOffline}>{isOnline}</span>
      )}

      <img
        className={css.friend__avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.friendName}>{name}</p>
    </li>
  );
}
