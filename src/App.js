import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import { GlobalStyles } from "./shared/GlobalStyles";
import Contact from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";

const App = () => {
	return (
		<>
			<GlobalStyles />
			<NavBar />
			<Home />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
};

export default App;
