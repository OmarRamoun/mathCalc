import renderer from 'react-test-renderer';
import Home from '../pages/Home';

test('Render components', () => {
    const tree = renderer.create(<Home />);
    expect(tree).toMatchSnapshot();
});