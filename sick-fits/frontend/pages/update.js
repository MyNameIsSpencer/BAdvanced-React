import UpdateItem from '../components/UpdateItem';

// must pass id;  that id is only available in a page, if you want it to be accessible at lower levels
// you can either export component using withRouter(Component) and that will expose it OR...
// you do have access to it on a page level, looking at _app.js  pageProps.query = ctx.query;  query is exposed to every page we have

const Sell = ({ query }) => (    //  <<< the {} is for destructoring
  <div>
    <UpdateItem id={query.id} />
  </div>
);

//   VVVVV   works too
// const Sell = props => (
//   <div>
//     <UpdateItem id={props.query.id} />
//   </div>
// );

export default Sell;
