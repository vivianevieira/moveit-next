import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/vivianevieira.png" alt="Viviane Vieira" />
      <div>
        <strong>Viviane Vieira</strong>
        <p>Level 1</p>
      </div>
    </div>
  );
}
