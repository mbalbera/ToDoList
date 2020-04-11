import 'react-native';
import React from 'react';
import LoggedIn from 'components/LoggedIn';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(
        <LoggedIn />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});