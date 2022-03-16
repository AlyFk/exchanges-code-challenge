import { rest } from 'msw';
import getMockExchanges from '../mockedData/exchanges/getMockExchanges';
import getMockExchange from '../mockedData/exchange/getMockExchange';
export const exchangeHandlerException = rest.get(
  `${process.env.API_BASE_URL!}/exchanges/:id`,
  async (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ message: 'Deliberately broken request' })
    );
  }
);
export const handlers = [
  rest.get(`${process.env.API_BASE_URL!}/exchanges`, (req, res, ctx) => {
    const limit = req.url.searchParams.get('limit') as string;
    const page = req.url.searchParams.get('page') as string;
    return res(
      ctx.status(200),
      ctx.json({
        ...getMockExchanges(+page, +limit),
      })
    );
  }),

  rest.get(`${process.env.API_BASE_URL!}/exchanges/:id`, (req, res, ctx) => {
    const { id } = req.params;
    return res(
      ctx.status(200),
      ctx.json({
        ...getMockExchange(id as string),
      })
    );
  }),
];
