import styles from './page.module.css';

export default function Home() {
	return <main className={styles.main}>Root page</main>;
}

export const dynamic = 'force-dynamic';
