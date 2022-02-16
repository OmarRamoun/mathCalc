import renderer from 'react-test-renderer';
import Header from '../components/Header';

test('Render components', () => {
    const tree = renderer.create(<Header />);
    expect(tree).toMatchSnapshot();
});