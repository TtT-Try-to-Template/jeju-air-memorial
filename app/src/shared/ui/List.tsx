import { Fragment, Key, ReactNode } from 'react';

type Props<T> = {
    data: T[];
    keyProperty: keyof T;
    empty: ReactNode;
    render: (data: T) => ReactNode;
}


export default function List<T>({ data, keyProperty, empty, render }: Props<T>) {
  if (data.length === 0) return empty;

  return (
    <div className="flex gap-y-[12px] flex-col">
      {data.map(item => (
        <Fragment key={item[keyProperty] as Key}>
          {render(item)}
        </Fragment>
      ))}
    </div>
  );
}
