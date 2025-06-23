// Import components React
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import { Section } from "./components/section/section.jsx";

function App() {
	return (
		<>
			<Header title="Mi pagina Web" show={true}>
				<h3> Esto es un h1</h3>
			</Header>

			<Section />

			<Footer />
		</>
	);
}

export default App;
