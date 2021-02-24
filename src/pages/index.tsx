import { Profile } from '../components/Profile';
import { ExperienceBar } from '../components/ExperienceBar';
import { CompletedChallenges } from '../components/CompletedChallenges';

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
