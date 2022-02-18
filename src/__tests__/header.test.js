import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';

test('Render components', () => {
    const tree = renderer.create(<Router><Header /></Router>);
    expect(tree).toMatchSnapshot();
});
