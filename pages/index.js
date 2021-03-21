import {MainLayout} from '../components/mainLayout';
import home from '../styles/home.module.scss';

export default function Home() {
  return (
      <MainLayout>
      <div className={home.wrapper}>
        <section className={home.content}>
          <h1>Choose the day for the meeting</h1>
          <p>We encourage you to book your appointment online. This will save you time.</p>
        </section>
        <div className={home.calendar}>Calendar</div>
      </div>
      </MainLayout>
  )
}
