import PropTypes from "prop-types";

export const Header = ({ children, title, show }) => {
	return (
		<header className="bg-amber-400 text-white text-4xl">
			<h1>{title || "Titulo por defecto"}</h1>
			{children}

			{show && <p>Este texto se va a mostrar si el prop show es true</p>}
		</header>
	);
};

Header.propTypes = {
	children: PropTypes.node,
	title: PropTypes.string,
};
