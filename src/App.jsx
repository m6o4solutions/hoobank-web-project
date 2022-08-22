import {
	Navbar,
	Hero,
	Statistics,
	Business,
	Billing,
	CardDeals,
	Testimonials,
	Clients,
	CTA,
	Footer,
} from './components';
import styles from './styles';

const App = () => {
	return (
		<div className="w-full overflow-hidden bg-primary">
			{/* navigation bar start */}
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<Navbar />
				</div>
			</div>
			{/*  navigation bar end */}

			{/* hero section start */}
			<div className={`bg-primary ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<Hero />
				</div>
			</div>
			{/* hero section end */}

			{/* main section start */}
			<div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<Statistics />
					<Business />
					<Billing />
					<CardDeals />
					<Testimonials />
					<Clients />
					<CTA />
					<Footer />
				</div>
			</div>
			{/* main section end */}
		</div>
	);
};

export default App;
