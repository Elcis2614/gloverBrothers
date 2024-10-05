import BannerView from '../components/BannerView';
import Stats from '../components/Stats';
import PubSection from '../components/PubSection';
import Foots from '../components/Footer';
import '../styles/HomePage.css';

function HomePage() {

	return (
		<>
			<div>
				<BannerView />
				<Stats/>
			</div>
			<PubSection/>
			<Foots/>
		</>
	);
}
export default HomePage;