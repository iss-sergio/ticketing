import BreadCrumb from '@/components/breadcrumb'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import './styles/main.css'


export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="app-admin-wrap-layout-2">
            <Navigation role="admin" />
            <div className="main-content-wrap">
                <main>
                    <div className="main-content-wrap flex flex-col flex-grow print-area pt-10">
                        <div className="container mx-auto">
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