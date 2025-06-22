// Import components React
import { Header } from "./components/Header";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Header title="Mi pagina Web" show={true}>
				<h3> Esto es un h1</h3>
			</Header>

			<section>
				<p> Esto es un section 😆 </p>
			</section>

			<Footer />
		</>
	);
}

export default App;
