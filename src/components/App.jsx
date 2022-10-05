import Container from './Container/Container';

import user from '../jsons/user';
import Profile from './Profile/Profile';

import data from '../jsons/data';
import Statistics from './Statistics/Statistics';

import friends from '../jsons/friends';
import FriendList from './FriendList/FriendList';

import transactions from '../jsons/transactions';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <Container>
      
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />

    </Container>
  );
};
