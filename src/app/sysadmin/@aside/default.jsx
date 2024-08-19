import React from 'react'
import { Gauge } from 'lucide-react';
import styles from './styles/aside.module.scss'

export default function aside() {
  return (
    <div className="side-content-wrap" >
        <div className="open sidebar-left" >
            <div className="ps" >
                <ul className="navigation-left" >
                    <li
                        aria-current="page"
                        href="/dashboards/dashboard-version-one"
                        className="router-link-active router-link-exact-active nav-item"
                        tag="li"
                        
                    >
                        <div className={`nav-item-hold ${styles.navItemIcon}`} >
                            <Gauge size={48} color="red"/>
                            <p>Dashboard</p>
                        </div>
                    </li>
                </ul>
                
            </div>
        </div>
    </div>

  )
}