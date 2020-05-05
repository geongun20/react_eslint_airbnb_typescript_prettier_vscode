import React, { FC, useState, ChangeEvent, FormEvent } from 'react';

interface Props {
  onCreate: (name: string, phone: string) => void;
}
const PhoneForm: FC<Props> = ({ onCreate }) => {
  console.log('render phone form service');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'name') setName(e.target.value);
    else if (e.target.name === 'phone') setPhone(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onCreate(name, phone);
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="name"
        value={name}
        onChange={handleChange}
      />
      <input
        name="phone"
        placeholder="phone"
        value={phone}
        onChange={handleChange}
      />
      <div>
        <button type="submit">submit</button>
      </div>
    </form>
  );
};
export default PhoneForm;
