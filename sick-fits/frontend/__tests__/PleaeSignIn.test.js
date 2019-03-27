import { shallow, mount } from 'enzyme';
import wait from 'waait';
import PleaseSignIn from '../components/PleaseSignIn';
import { CURRENT_USER_QUERY } from '../components/User';
import { MockedProvider } from 'react-apollo/test-utils';
import { fakeUser } from '../lib/testUtils';

const notSignedInMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { me: null } },
  },
];

const signedInMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { me: fakeUser() } },
  },
];

describe('<PleaseSignIn/>', () => {
  test('renders the sign in dialog to legged out users', async () => {
    // const signInner = shallow(<PleaseSignIn />);
    const wrapper = mount(
      <MockedProvider mocks={notSignedInMocks}>
        <PleaseSignIn />
      </MockedProvider>
    );
    await wait();
    wrapper.update();
    expect(wrapper.text()).toContain('Please Sign In before Continuing');
    const SignIn = wrapper.find('Signin');
    expect(SignIn.exists()).toBe(true);
  });

  test('renders the child component when the user is signed in', async () => {
    const Hey = () => <p>Hey!</p>;
    const wrapper = mount(
      <MockedProvider mocks={signedInMocks}>
        <PleaseSignIn>
          <Hey />
        </PleaseSignIn>
      </MockedProvider>
    );

    await wait();
    wrapper.update();
    // expect(wrapper.find('Hey').exists()).toBe(true);
    expect(wrapper.contains(<Hey />)).toBe(true);
  });
});




// describe('<Item/>', () => {
//   test('renders the image properly', () => {
//     // tests image only
//     const wrapper = shallow(<ItemComponent item=
//     {fakeItem} />);
//     // const img = wrapper.find('img');
//     expect(toJSON(wrapper)).toMatchSnapshot();
//     // expect(img.props().src).toBe(fakeItem.image);
//     // expect(img.props().alt).toBe(fakeItem.title);
//   });



// CartCount.test.js
// import { shallow, mount } from 'enzyme';
// import toJSON from 'enzyme-to-json';
// import CartCount from '../components/CartCount';
//
// describe('<CartCount/>', () => {
//   test('renders', () => {
//     shallow(<CartCount count={10} />);
//   });



//
// describe('<PleaseSignIn>', () => {
//   test('renders the sign in dialog to logged out users', async () => {
//     const wrapper = mount(
//       <MockedProvider mocks={notSignedInMocks}>
//         <PleaseSignIn />
//       </MockedProvider>
//     );
//     await wait();
//     wrapper.update();
//     expect(wrapper.text()).toContain("Please Sign in before Continuing");
//
//     const SignIn = wrapper.find('Signin');
//     expect(SignIn.exists()).toBeTruthy();
//     // console.log(SignIn.debug());
//     // expect(wrapper.find().exists()).toBe(true);
//     // console.log(wrapper.debug());
//     // expect(50).toBe(4444);
//   });
//
//   test('renders the child component when the user is signed in', async () => {
//     const wrapper = mount(
//       <MockedProvider
//     );
//   }
//
// });
