import BreadCrumb from '@/components/breadcrumb'
import Navigation from '@/components/navigation'
import './styles/main.css'
import styles from './styles/footer.module.css'
import Footer from '@/components/footer'

export default function Layout({
    children,
    // footer
  }: {
    children: React.ReactNode
    // footer: React.ReactNode
  }) {
    return (
        <div className="app-admin-wrap-layout-2">
            <Navigation />
            <div className="main-content-wrap">
                <main>
                    <div className="main-content-wrap flex flex-col flex-grow print-area pt-10">
                        <div>
                            <BreadCrumb />
                            {children}
                        </div>
                        <Footer />
                    </div>
                </main>
            </div>
        </div>
    )
  }