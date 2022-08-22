import { stats } from '../constants';
import styles from '../styles';

const Statistics = () => {
	return (
		/** statistics section start */
		<section className={`${styles.flexCenter} mb-6 flex-row flex-wrap sm:mb-20`}>
			{stats.map((stat) => (
				<div key={stat.id} className={`m-3 flex flex-1 flex-row items-center justify-start`}>
					<h4 className="font-poppins text-[30.89px] font-semibold leading-[43.16px] text-white xs:text-[40.89px] xs:leading-[53.16px]">
						{stat.value}
					</h4>
					<p className="text-gradient ml-3 font-poppins text-[15.45px] font-normal uppercase leading-[21.58px] xs:text-[20.45px] xs:leading-[26.58px]">
						{stat.title}
					</p>
				</div>
			))}
		</section>
		/** statistics section end */
	);
};

export default Statistics;
