import Link from 'next/link'
import clasess from '../styles/mainLoyaut.module.scss'

function MainLayout({children}){
  return (
    <div className={clasess.content}>
      <header className={clasess.header}>
          <div className={clasess.container}>
          <div className={clasess.logo}>
            <span className={clasess.logo_lable}>we</span>
            <span className={clasess.logo_text}>Rdevs</span>
          </div>
          <ul className={clasess.nav}>
            <li>
              <Link href={'/'}><a  className={clasess.nav__item}>Home</a></Link>
            </li>
            <li>
            <Link href={'/about'}><a className={clasess.nav__item}>About</a></Link>
            </li>
          </ul>
          </div>
        </header>
        
        <main className={clasess.main_content}>
          {children}
        </main>
    </div>
      
    
  )
}

export{
  MainLayout
}