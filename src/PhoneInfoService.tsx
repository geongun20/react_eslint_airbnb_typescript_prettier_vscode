import React, { FC, useState, ChangeEvent, useEffect } from 'react';

export interface PhoneInfo {
  name: string;
  phone: string;
  id: number;
}
interface Props {
  info?: PhoneInfo;
  onRemove: (id: number) => void;
  onUpdate: (id: number, name: string, phone: string) => void;
}
const PhoneInfoService: FC<Props> = (props) => {
  console.log('render phone info service');
  const {
    info = {
      name: 'hong',
      phone: '010-0000-0000',
      id: 0,
    },
    onRemove,
    onUpdate,
  } = props;
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(info.name);
  const [phone, setPhone] = useState(info.phone);
  const handleRemove = (): void => {
    onRemove(info.id);
  };
  const handleToggleEdit = (): void => {
    setEditing((e) => !e);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'name') setName(e.target.value);
    else if (e.target.name === 'phone') setPhone(e.target.value);
  };
  useEffect(() => {
    if (!editing) {
      if (name !== info.name || phone !== info.phone) {
        onUpdate(info.id, name, phone);
      }
    }
  }, [editing, info.id, info.name, info.phone, name, onUpdate, phone]);
  const style = {
    border: '1px solid white',
    padding: '8px',
    margin: '8px',
    color: 'white',
  };
  return editing ? (
    <div style={style}>
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
      <button type="button" onClick={handleToggleEdit}>
        confirm
      </button>
      <button type="button" onClick={handleRemove}>
        delete
      </button>
    </div>
  ) : (
    <div style={style}>
      <div>
        <b>{info.name}</b>
      </div>
      <div>{info.phone}</div>
      <button type="button" onClick={handleToggleEdit}>
        edit
      </button>
      <button type="button" onClick={handleRemove}>
        delete
      </button>
    </div>
  );
};
export default PhoneInfoService;
