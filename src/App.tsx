import React, { useState, ChangeEvent, useMemo } from 'react';
import './App.css';
import MyName from './MyName';
import Counter from './Counter';
import PhoneForm from './PhoneForm';
import PhoneInfoListService from './PhoneInfoListService';

function App(): React.ReactElement {
  const [phoneNumbers, setPhoneNumbers] = useState([
    { name: 'hong', phone: '010', id: 0 },
    { name: 'hss', phone: '010', id: 1 },
    { name: 'haas', phone: '010', id: 2 },
    { name: 'hsso', phone: '010', id: 3 },
    { name: 'asdq', phone: '010', id: 4 },
    { name: 'honsdiasdg', phone: '010', id: 5 },
  ]);
  const [id, setId] = useState(6);
  const [keyword, setKeyword] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setKeyword(e.target.value);
  };
  const handleCreate = (name: string, phone: string): void => {
    setPhoneNumbers((pns) => [...pns, { name, phone, id }]);
    setId((_id) => _id + 1);
  };
  const handleRemove = (_id: number): void => {
    setPhoneNumbers((pns) => pns.filter((pn) => pn.id !== _id));
  };
  const handleUpdate = (_id: number, name: string, phone: string): void => {
    setPhoneNumbers((pns) =>
      pns.map((pn) => (pn.id === _id ? { ...pn, name, phone } : pn)),
    );
  };
  const filteredPhoneNumbers = phoneNumbers.filter(
    (pn) => pn.name.indexOf(keyword) !== -1,
  );
  const MemoizedMyName = useMemo(() => <MyName name="neo" />, []);
  const MemoizedCounter = useMemo(() => <Counter />, []);
  return (
    <div className="App">
      {MemoizedMyName}
      {MemoizedCounter}
      <PhoneForm onCreate={handleCreate} />
      <PhoneInfoListService
        data={filteredPhoneNumbers}
        onRemove={handleRemove}
        onUpdate={handleUpdate}
      />
      <input
        name="keyword"
        placeholder="keyword"
        value={keyword}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
