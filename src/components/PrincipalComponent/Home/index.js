import React from "react"
import Header from "../../SomeComponents/Header"
import Footer from "../../SomeComponents/Footer"
import CriptoTable from "../../SomeComponents/CriptoTable"

const Home = () => {
	return (
			<>
				<Header />
				<h3>Principales Coins</h3>
				<CriptoTable />
				<Footer />
			</>
	);
}
export default Home;