import React, { FC, useMemo } from 'react';
import PhoneInfoService, { PhoneInfo } from './PhoneInfoService';

interface Props {
  data?: PhoneInfo[];
  onRemove: (id: number) => void;
  onUpdate: (id: number, name: string, phone: string) => void;
}
const PhoneInfoListService: FC<Props> = (props) => {
  console.log('render phone info list service');
  const {
    data = [],
    onRemove = (): void => {
      throw Error('onRemove not defined');
    },
    onUpdate = (): void => {
      throw Error('onUpdate not defined');
    },
  } = props;
  const list = useMemo(
    () =>
      data.map((info) => (
        <PhoneInfoService
          key={info.id}
          info={info}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />
      )),
    [data, onRemove, onUpdate],
  );

  return <div>{list}</div>;
};
export default PhoneInfoListService;
