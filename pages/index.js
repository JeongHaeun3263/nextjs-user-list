import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

import Link from 'next/link';
import { Fragment } from 'react/cjs/react.production.min';

export default function Home() {
	return (
		<Fragment>
			<Head>
				<title>Nextjs | Home</title>
				<meta name='keywords' content='nextjs basic' />
			</Head>
			<div>
				<h1 className={styles.title}>Homepage</h1>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et
					sollicitudin ipsum. Nunc porttitor nulla id est elementum, vitae porta
					nulla cursus. Fusce a congue neque. Quisque pulvinar odio sit amet
					interdum ultrices. Sed eu felis eu orci tristique euismod luctus vel
					ipsum. Praesent dictum elit ac arcu vulputate, vitae congue nibh
					pulvinar. Sed dignissim molestie diam ac gravida. Proin malesuada urna
					sollicitudin commodo posuere. Sed eu sollicitudin nulla. Pellentesque
					ultrices efficitur lectus in sagittis. Duis efficitur ut lectus id
					semper.
				</p>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et
					sollicitudin ipsum. Nunc porttitor nulla id est elementum, vitae porta
					nulla cursus. Fusce a congue neque. Quisque pulvinar odio sit amet
					interdum ultrices. Sed eu felis eu orci tristique euismod luctus vel
					ipsum. Praesent dictum elit ac arcu vulputate, vitae congue nibh
					pulvinar. Sed dignissim molestie diam ac gravida. Proin malesuada urna
					sollicitudin commodo posuere. Sed eu sollicitudin nulla. Pellentesque
					ultrices efficitur lectus in sagittis. Duis efficitur ut lectus id
					semper.
				</p>
				<Link href='/ninjas'>
					<a className={styles.btn}>See more Ninjas</a>
				</Link>
			</div>
		</Fragment>
	);
}
