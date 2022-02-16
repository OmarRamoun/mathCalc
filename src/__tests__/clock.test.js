import renderer from 'react-test-renderer';
import Clock from '../components/Clock';

test('Render components', () => {
    const tree = renderer.create(<Clock />);
    expect(tree).toMatchSnapshot();
});