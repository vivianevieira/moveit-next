import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  return(
    <div className={styles.challengeBoxContainer}>
      <div className={styles.challengeNotActive}>
        <strong>You must finish a cycle in order to start a new challenge</strong>
      </div>
      <p>
        <img src="icons/level-up.svg" alt="Level up" />
        Advance to the next level by completing a challenge.
      </p>
    </div>
  )
}
