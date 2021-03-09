
export const main = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      test: 'ok',
      test2: process.env.HELLO_TEST_2
    })
  };
};
