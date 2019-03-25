import ItemComponent from '../components/Item';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

const fakeItem = {
  id: 'ABC123',
  title: 'A Cool Item',
  price: 5000,
  description: 'This item is really cool!',
  image: 'dog.jpg',
  largeImage: 'largedog.jpg',
};


describe('<Item/>', () => {
  test('renders the image properly', () => {
    // tests image only
    const wrapper = shallow(<ItemComponent item=
    {fakeItem} />);
    // const img = wrapper.find('img');
    expect(toJSON(wrapper)).toMatchSnapshot();
    // expect(img.props().src).toBe(fakeItem.image);
    // expect(img.props().alt).toBe(fakeItem.title);
  });

  // it('renders the image properly', () => {
    //   const wrapper = shallow(<ItemComponent item={fakeItem} />);
    //   const img = wrapper.find('img');
    //   expect(img.props().src).toBe(fakeItem.image);
    //   expect(img.props().alt).toBe(fakeItem.title);
    // });
    // it('renders the pricetag and title', () => {
    //   const wrapper = shallow(<ItemComponent item={fakeItem} />);
    //   const PriceTag = wrapper.find('PriceTag');
    //   expect(PriceTag.children().text()).toBe('$50');
    //   expect(wrapper.find('Title a').text()).toBe(fakeItem.title);
    // });
    // it('renders out the buttons properly', () => {
    //   const wrapper = shallow(<ItemComponent item={fakeItem} />);
    //   const buttonList = wrapper.find('.buttonList');
    //   expect(buttonList.children()).toHaveLength(3);
    //   expect(buttonList.find('Link')).toHaveLength(1);
    //   expect(buttonList.find('AddToCart').exists()).toBe(true);
    //   expect(buttonList.find('DeleteItem').exists()).toBe(true);
    // });





  // test('renders and displays properly', () => {
  //   const wrapper = shallow(<ItemComponent item= {fakeItem} />);
  //   const PriceTag = warpper.find('PriceTag');
  //   console.log(PriceTag.children());
  //   expect(PriceTag.children().text()).toBe('$50');
  //   // console.log(PriceTag.children().text()).toBe('$50');
  //   // console.log(wrapper.debug());
  //   expect(wrapper.find('Title a').text()).toBe(fakeItem.title);
  //   // const img = wrapper.find('img');
  //   // console.log(img.props);
  //   // expect(img.props().src).toBe(fakeItem.image);
  //   // expect(img.props().src).toBe(fakeItem.image);
  //   // expect(img.props().alt).toBe(fakeItem.title);
  // });
  //
  // test('renders out the buttons properly', () => {
  //   const wrapper = shallow(<ItemComponent item= {fakeItem} />);
  //   const buttonList = wrapper.find('.buttonList');
  //   expect(buttonList.children()).toHaveLength(3);
  //   expect(buttonList.filter('Link')).toHaveLength(1);
  //   // expect(buttonList.find('Link').exists()).toBe(true);  // VVVV alternative
  //   expect(buttonList.find('Link').exists()).toBeTruthy();
  //   // console.log(buttonList.debug());
  //   // console.log(buttonList.children());
  // });
});
