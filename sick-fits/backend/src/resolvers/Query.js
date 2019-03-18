const { forwardTo } = require('prisma-binding');
const { hasPermission } = require('../utils');

const Query = {
  items: forwardTo('db'),
  item: forwardTo('db'),
  itemsConnection: forwardTo('db'),
  me(parent, args, ctx, info) {
    // chceck if there is a current user ID
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.user(
      { where: { id: ctx.request.userId }, },
      info    // <<< actual query from client side
    );
  },
  async users(parent, args, ctx, info) {
    // 1. Check if they are logged in
    if (!ctx.requrest.userId) {
      throw new Error('You must be logged in!');
    }
    console.log(ctx.request.userId);
    // 2. Check if the user has the permissions to query all the users
    hasPermission(ctx.request.user, ['ADMIN', 'PERMISSIONUPDATE']);

    // 2. if they do, query all the users!
    return ctx.db.query.users({}, info);
  },

// async items(parent, args, ctx, info) {
// console.log('Getting Items!!');
// const items = await ctx.db.query.items();
// return items;
// }

// const Query = {
//   dogs(parent, args, ctx, info) {
//     global.dogs = global.dogs || [];
//     return global.dogs;
//     // return [{ name: 'Snickers' }, { name: 'Sunny' }];
//   },
// };
};

module.exports = Query;
