import {shallow} from 'enzyme';
import * as React from 'react';
import {View} from '../../src';

describe('View', () => {
  let rendered;

  beforeAll(() => {
    // Render
    const history = {};
    const location = {};
    const match = {};
    rendered = shallow(<View history={history} location={location} match={match}/>);
  });

  it('should render', () => {
    return expect(rendered.exists()).toBe(true);
  });
});
