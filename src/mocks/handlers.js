import { rest } from 'msw'

export const handlers = [

    //会員登録機能
    rest.post('/user', (req, res, ctx) => {
        return res(
            ctx.status(200),
        )
    }),
]