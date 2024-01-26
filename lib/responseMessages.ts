type res = "ServerError" | "Success" | "BadRequest"

const responseMessages = (messageType: res) => {
  let response = { message: "", status: 500 };
  switch (messageType) {
    case "Success":
      response = { message: "Success", status: 200 };
      break;

    case "BadRequest":
      response = { message: "Bad Request", status: 400 };
      break;

    default:
      response = { message: "Server Error", status: 500 };
      break;
  }

  return new Response(JSON.stringify(response.message), { status: response.status });
}

export default responseMessages;