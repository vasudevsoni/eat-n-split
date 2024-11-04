const initialFriends = [
  {
    id: 118836,
    name: "Aniket",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Jai",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Aksh",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
  {
    id: 256894,
    name: "Vaibhav",
    image: "https://i.pravatar.cc/48?u=256894",
    balance: 0,
  },
];

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <FormAddFriend />
        <Button>Add friend</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

function FriendsList() {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map(function (friend) {
        return <Friend key={friend.id} friend={friend} />;
      })}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">You owe ${Math.abs(friend.balance)}</p>
      )}
      {friend.balance > 0 && (
        <p className="green">Owes you ${Math.abs(friend.balance)}</p>
      )}
      {friend.balance === 0 && <p>You are settled up</p>}
      <Button>Select</Button>
    </li>
  );
}

function Button({ children }) {
  return <button className="button">{children}</button>;
}

function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>🧑🏻 Name</label>
      <input type="text" />
      <label>🌄 Image URL</label>
      <input type="text" />
      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>
      <label>💰 Bill value</label>
      <input type="text" />
      <label>🧔🏻 Your expense</label>
      <input type="text" />
      <label>🧑‍🤝‍🧑 X's expense</label>
      <input type="text" disabled />
      <label>🤑 Who's paying the bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
