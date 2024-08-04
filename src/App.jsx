import Header from './components/header/Header';
import Products from './components/products/Products';
import Props from './components/props/Props';
import Zflip6 from './assets/galaxy-ai.jpg';

function App() {
	const link1 = ['Galaxy Z Flip6', 'Galaxy Z Fold6', 'Galaxy Watch Ultra', 'Galaxy Buds3 Pro', 'Galaxy Experience'];
	const link2 = ['Samsung Neo QLED 8k', 'TV + Soundbar bundles', 'Q990D'];
	const link3 = ['Bespoke Appliances', 'Bespoke Refrigerators', 'Bespoke Laundry'];
	return (
		<>
			<Header />
			<Products />
			<Props
				title='Mobile & Computing'
				navLinks={link1}
				name='Galaxy Z Flip6'
				desc='Get up to $650 instant trade-in credit θ and double the storage on us with select colors.'
				url={Zflip6}
			/>

			<Props
				title='TV & Audio'
				navLinks={link2}
				name='Discover new depths of detail'
				desc='Buy an 85” Class Samsung Neo QLED QN800D and take in hyper-realistic picture with Neo Quantum HDR 8K+.'
				url={Zflip6}
			/>

			<Props
				title='Home Appliances'
				navLinks={link2}
				name='Save on Bespoke all summer'
				desc="Get up to $1,300 off select Bespoke models from America's #1 appliance brand"
				url={Zflip6}
			/>
		</>
	);
}

export default App;
