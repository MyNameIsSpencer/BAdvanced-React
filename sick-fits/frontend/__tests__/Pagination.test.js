import { mount } from 'enzyme';
import wait from 'waait';
import toJSON from 'enzyme-to-json';
import Router from 'next/router';
import Pagination, { PAGINATION_QUERY } from '../components/Pagination';
import { MockedProvider } from 'react-apollo/test-utils';

Router.router = {
  push() {},
  prefetch() {},
};

function makeMocksFor(length) {
  return [
    {
      request: { query: PAGINATION_QUERY, variables: { skip: 0, first: 4 }},
      result: {
        data: {
          itemsConnection: {
            __typename: 'aggregate',
            aggregate: {
              __typename: 'count',
              count: length,
            },
          },
        },
      },
    },
  ];
}

describe('<Pagination/>', () => {

  test('displays a loading message', () => {
    const wrapper = mount(

      <MockedProvider mocks={makeMocksFor(1)}>
        <Pagination page={1} />
      </MockedProvider>
    );
    const pagination = wrapper.find('[data-test="pagination"]');
    expect(wrapper.text()).toContain('Loading...');
  });

  // test('renders pagination for 18 items', async () => {
  //   const wrapper = mount(
  //     <MockedProvider mocks={makeMocksFor(18)}>
  //       <Pagination page={1} />
  //     </MockedProvider>
  //   );
  //   await wait();
  //   wrapper.update();
  //   expect(wrapper.find('.totalPages').text()).toEqual('5');
  //   const pagination = wrapper.find('div[data-test="pagination"]');
  //   expect(toJSON(pagination)).toMatchSnapshot();
  // });
  //
  // test('disables prev button on first page', async () => {
  //   const wrapper = mount(
  //     <MockedProvider mocks={makeMocksFor(18)}>
  //       <Pagination page={1} />
  //     </MockedProvider>
  //   );
  //   await wait();
  //   wrapper.update();
  //   expect(wrapper.find('a.prev').prop('aria-disabled')).toEqual(true);
  //   expect(wrapper.find('a.next').prop('aria-disabled')).toEqual(false);
  // });
  //
  // test('disables prev button on first page', async () => {
  //   const wrapper = mount(
  //     <MockedProvider mocks={makeMocksFor(18)}>
  //       <Pagination page={5} />
  //     </MockedProvider>
  //   );
  //   await wait();
  //   wrapper.update();
  //   expect(wrapper.find('a.prev').prop('aria-disabled')).toEqual(false);
  //   expect(wrapper.find('a.next').prop('aria-disabled')).toEqual(true);
  // });

  test('disables prev button on first page', async () => {
    const wrapper = mount(
      <MockedProvider mocks={makeMocksFor(18)}>
        <Pagination page={3} />
      </MockedProvider>
    );
    await wait();
    wrapper.update();
    expect(wrapper.find('a.prev').prop('aria-disabled')).toEqual(false);
    expect(wrapper.find('a.next').prop('aria-disabled')).toEqual(false);
  });

});
