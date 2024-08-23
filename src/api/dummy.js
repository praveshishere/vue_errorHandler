const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  })
}

export async function failingApi() {
  await sleep(4000);

  throw new Error({
    statusCode: 404,
    msg: "No found",
    data: {},
  })
}