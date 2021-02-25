import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const contextData = useContext(ChallengesContext);
  console.log(contextData)

  const hasActiveChallenge = true;

  return(
    <div className={styles.challengeBoxContainer}>
      { hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Win 400 xp</header>

          <main>
            <img src="icons/body.svg" />
            <strong>New Challenge</strong>
            <p>Get up and get moving!</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
            >
              Failed
            </button>
            <button
              type="button"
              className={styles.challengeSucceededButton}
            >
              Completed
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>You must finish a cycle in order to start a new challenge</strong>
          <p>
          <img src="icons/level-up.svg" alt="Level up" />
          Advance to the next level by completing a challenge.
          </p>
        </div>
      )}
    </div>
  )
}
