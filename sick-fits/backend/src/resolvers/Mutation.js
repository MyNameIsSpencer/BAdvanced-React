// could have also exported database then imported here, but having access via ctx good enough

const Mutations = {
  async createItem(parent, args, ctx, info) {
    // TODO: Check if they are logged in

    const item = await ctx.db.mutation.createItem(
      {
        data: {
          ...args,
        },
      },
      info
    );

    console.log(item);

    return item;
  },
  updateItem(parent, args, ctx, info) {
    // first take a copy of the updates
    const updates = { ...args };
    // remove the ID from the updates because it should not be updated, should remain constant
    delete updates.id;
    // run the update method;  db is how we expose the prisma database;
    // mutation gives access to all mutations in prisma.graphql Mutations object
    // Looking at prisma.graphql, updateItem takes (data: ItemUPdateInput!, where: ItemWhereUniqueInput!): Item
    return ctx.db.mutation.updateItem(
      {
        data: updates,
        where: {
// need to reference original arg id
          id: args.id,
        },
      },
//  info will contain query from client side for that item
      info
    );
  },
  async deleteItem(parent, args, ctx, info) {
    const where = { id: args.id };
    // 1. find the item
    const item = await ctx.db.query.item({ where }, `{ id title }`);
    // 2. Check if they own that item, or have the permissions
    // TODO
    // 3. Delete it!
    return ctx.db.mutation.deleteItem({ where }, info);
  },
  // createDog(parent, args, ctx, info) {
  //   globabl.dogs = global.dogs || [];
  //   // create a dog!
  //   const newDog = { name: args.name };
  //   global.dogs.push(newDog);
  //   return newDog;
  //   console.log(args);
  // },
};

module.exports = Mutations;
