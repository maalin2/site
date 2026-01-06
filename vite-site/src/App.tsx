import HomePage from '@/components/homepage';
import Canvas from '@/components/canvas';
import { Routes, Route } from 'react-router-dom';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/clone" element={<Canvas />} />
		</Routes>
	)
};

export default App;
