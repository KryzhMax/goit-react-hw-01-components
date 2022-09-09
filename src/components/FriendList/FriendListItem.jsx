import css from './FriendList.module.css';
import Avatar from 'react-avatar';

export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={css.friendItem}>
      {
        <span
          className={isOnline ? css.friendOnline : css.friendOffline}
        ></span>
      }
      <Avatar
        className={css.friend__avatar}
        src={avatar}
        alt="User avatar"
        size="40"
      />
      {/* <img
        className={css.friend__avatar}
        src={avatar}
        alt="User avatar"
        width="40"
      /> */}
      <p className={css.friendName}>{name}</p>
    </li>
  );
}
