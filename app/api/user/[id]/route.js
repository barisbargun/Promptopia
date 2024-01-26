import User from "@models/user";
import { connectToDB } from "@utils/database";
import responseMessages from "@lib/responseMessages";

export const GET = async (req, { params }) => {
  const { id } = await params;
  try {
    await connectToDB();
    const res = await User.findById(id);
    return new Response(JSON.stringify(res), { status: 200 });
  } catch (error) {
    return responseMessages("ServerError")
  }
}