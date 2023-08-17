/* eslint-disable react/prop-types */
const Error = ({ children }) => {
	return (
		<div className="bg-red-700 mb-2 rounded-lg p-2 text-center text-white uppercase font-bold">
			{children}
		</div>
	);
};

export default Error;
