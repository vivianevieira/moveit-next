import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);

  return(
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Win {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>New Challenge</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={resetChallenge}
            >
              Failed
            </button>
            <button
              type="button"
              className={styles.challengeSucceededButton}
              onClick={completeChallenge}
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
