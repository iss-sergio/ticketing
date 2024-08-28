import React from 'react'
import styles from './styles/card.module.scss'

type Props = {
    cardHeader?: string
    noPadding?: boolean
    children?: React.ReactNode
    cn?: string
}

const Card: React.FC<Props> = ({ cardHeader, noPadding, children, cn }) => {
  return (
    <div className={`${styles.card} flex flex-col bg-white dark:bg-gray-800 dark:text-white ${cn}`}>
        <div>
            {cardHeader && (
                <div className="cardHeader">
                    <div className="card-title p-4">{cardHeader}</div>
                </div>
            )}
            <div className={`${styles.cardBody} ${noPadding ? styles.noPadding : ''}`}>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Card