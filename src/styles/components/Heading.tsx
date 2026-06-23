import type React from 'react';
import styles from './Heading.module.css';

type HeadingProps = {
    children: React.ReactNode; //tudo que o react aceita como children está nessa tipagem
}; //no typescript fazemos assim para fazer a tipagem do props

export function Heading({ children }: HeadingProps)//posso fazer dessa forma tambem
 {
    return <h1 className={styles.heading}>{ children }</h1>
    //const { children } = props //dessa forma eu não preciso usar o objeto que seria dessa forma -> const children = props.children;
    //return <h1 className={`${styles.heading} ${styles.cyan}`}>{children}</h1>
}
