import { testFlight } from "../lib/test-data";
import { rest } from "msw"
export const handlers = [
  rest.get('https://api.npoint.io/4829d4ab0e96bfab50e7', (req, res, ctx) => {

    return res(
      ctx.status(200),
      ctx.json({
        "data": {
          "result": [
            testFlight
          ]
        },
        "message": "Success"
      })
    );
  })

]