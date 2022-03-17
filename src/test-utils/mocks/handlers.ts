import { rest } from 'msw';
import getMockExchanges from '../mockedData/exchanges/getMockExchanges';
import getMockExchange from '../mockedData/exchange/getMockExchange';

export const exchangeHandlerException = rest.get(
  `${process.env.REACT_APP_API_URL!}/exchanges/:id`,
  async (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ message: 'Deliberately broken request' })
    );
  }
);
export const handlers = [
  rest.get(`${process.env.REACT_APP_API_URL!}/exchanges`, (req, res, ctx) => {
    const limit = req.url.searchParams.get('per_page') as string;
    const page = req.url.searchParams.get('page') as string;
    const data = getMockExchanges(+page, +limit);
    return res(ctx.status(200), ctx.json(data));
  }),

  rest.get(
    `${process.env.REACT_APP_API_URL!}/exchanges/:id`,
    (req, res, ctx) => {
      const { id } = req.params;
      return res(
        ctx.status(200),
        ctx.json({
          ...getMockExchange(id as string),
        })
      );
    }
  ),
];
