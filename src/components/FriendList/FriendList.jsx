// import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem';

export function FriendList({ friends }) {
  return (
    <ul className={css.friend__list}>
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      ))}
    </ul>
  );
}
