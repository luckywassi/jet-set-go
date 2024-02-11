import { testFlight } from "../lib/test-data";
import { rest } from "msw"
export const handlers = [
  rest.get('https://api.npoint.io/4829d4ab0e96bfab50e7', (req, res, ctx) => {

    // Somehow handler gives network error. So, I was not able to use the mock server.
    return res(
      ctx.status(200),
      ctx.json({
        data: {
          result: [
            testFlight
          ]
        },
        message: "Success"
      })
    );
  })

]