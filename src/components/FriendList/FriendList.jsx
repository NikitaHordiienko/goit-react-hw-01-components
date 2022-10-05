import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import css from './FriendList.module.css'

const FriendList = ({ friends }) => {
    return (
        <ul className={css['friend-list']}>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />
            ))}
        </ul>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired
        })
    ).isRequired
};

export default FriendList;