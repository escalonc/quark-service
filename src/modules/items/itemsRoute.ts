import Joi from '@hapi/joi';
import { ServerRoute } from '@hapi/hapi';

import { all } from './itemsHandler';

let ThisModule: ServerRoute[] = [
  {
    method: 'GET',
    path: '/v1/items',
    handler: all,
    options: {
      description: 'Gets all items from database',
      notes:
        'Gets all items from database does take limit on how many items are to be displayed',
      tags: ['api', 'all', 'items'],
      validate: {
        query: Joi.object({
          from: Joi.number()
            .integer()
            .default(0)
            .min(0)
            .description('Starting point of items in the item array')
            .example(1),
          limit: Joi.number()
            .integer()
            .min(1)
            .default(20)
            .description('Limit of items to be displayed')
            .example(20),
        }).options({ stripUnknown: true }),
      },
      // response: {
      //   schema: Joi.object()
      //     .keys({
      //       data: Joi.object(),
      //         .required()
      //         .items(Joi.object())
      //         .description(
      //           'This is the response content, this holds the array of items'
      //         )
      //         .example([{ name: 'Item1' }, { name: 'Item2' }]),
      //       errors: Joi.array()
      //         .items(Joi.object())
      //         .description(
      //           'This is a response from the api when there is an error'
      //         )
      //         .example([
      //           {
      //             code: 123,
      //             message:
      //               'Payment gateway error: The name does not belong to card number',
      //           },
      //           {
      //             code: 456,
      //             message: 'CVV is invalid for type number',
      //           },
      //         ]),
      //     })
      //     .label('items'),
      // },
      auth: false,
    },
  },
];

export default ThisModule;
