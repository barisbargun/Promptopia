import Post from "@models/post";
import { connectToDB } from "@utils/database";

export const GET = async (req, { params }) => {
  const { id } = await params;
  try {
    await connectToDB();
    const res = await Post.find({ creator: id }).populate('creator');
    if (!res) throw Error;
    return new Response(JSON.stringify(res), { status: 200 });
  } catch (error) {
    return responseMessages("ServerError");
  }
}