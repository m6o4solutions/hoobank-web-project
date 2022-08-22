import React from 'react';

const Button = ({ styles }) => {
	return (
		/* button component start */
		<button
			type="button"
			className={`bg-blue-gradient rounded-[10px] py-4 px-6 font-poppins text-[18px] font-medium text-primary outline-none ${styles}`}
		>
			Get Started
		</button>
		/* button component end */
	);
};
export default Button;
