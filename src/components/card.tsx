import React from 'react'
import styles from './styles/card.module.scss'

type Props = {
    cardHeader?: string
    noPadding?: boolean
    children?: React.ReactNode
}

const Card: React.FC<Props> = ({ cardHeader, noPadding, children }) => {
  return (
    <div className={`${styles.card} flex flex-col bg-white dark:bg-gray-800 dark:text-white`}>
        <div>
            <div className="cardHeader">
                <div className="card-title p-4">{cardHeader}</div>
            </div>
            <div className={`${styles.cardBody} ${noPadding ? 'noPadding' : ''}`}>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Card