// import joi from 'joi';

// const { all } = itemshandler;

// const getitems = () => {
//   handler: all,
//   options: {
//     description: 'Gets all items from database',
//     notes: 'Gets all items from database does take limit on how many items are to be displayed',
//     tags: ['api', 'all', 'items'],
//     validate: {
//         query: {
//             from: joi.number()
//                 .integer()
//                 .default(0)
//                 .min(0)
//                 .description('Starting point of items in the item array')
//                 .example(1),
//             limit: joi.number()
//                 .integer()
//                 .default(20)
//                 .min(0)
//                 .description('Limit of items to be displayed')
//                 .example(20)
//         }
//     },
//   }
//   response: {
//       schema: itemshandler.schema.items
//   },
//   auth: false
//   // auth: {
//   //     strategy: 'session',
//   //     scope: 'user' // or [‘user’,’admin’]
//   // }
// };

// export default {
//   getitems
// };
