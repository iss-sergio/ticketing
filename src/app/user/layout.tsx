import BreadCrumb from '@/components/breadcrumb'
import Navigation from '@/components/navigation'
import './styles/main.css'

export default function Layout({
    children,
    footer
  }: {
    children: React.ReactNode
    footer: React.ReactNode
  }) {
    return (
        <div className="app-admin-wrap-layout-2">
            <Navigation role="user" />
            <div className="main-content-wrap">
                <main>
                    <div className="main-content-wrap flex flex-col flex-grow print-area pt-10">
                        <div className="container mx-auto">
                            <BreadCrumb />
                            {children}
                        </div>
                        {footer}
                    </div>
                </main>
            </div>
        </div>
    )
  }