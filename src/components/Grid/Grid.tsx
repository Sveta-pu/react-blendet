import type { ReactNode } from 'react';
import style from './Grid.module.css';

interface GridItemProps {
  children: ReactNode;
}

export default function Grid({ children }: GridItemProps) {
  return <ul className={style.list}>{children}</ul>;
}
