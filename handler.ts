import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import serverlessHttp from "serverless-http";

import { app } from "./src/app";

export const run = serverlessHttp(app);

export const hello = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        from: "ahmedkhaled4d@gmail.com",
        message:
          "Go Serverless v3.0! Your function executed successfully! , Thanks Ahmed",
        input: event,
      },
      null,
      2
    ),
  };
};
