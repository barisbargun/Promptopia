import responseMessages from "@lib/responseMessages";
import Post from "@models/post";
import { connectToDB } from "@utils/database";

export const POST = async (req) => {
  const { query, tag } = await req.json();
  try {
    await connectToDB();

    const res = await Post.find(
      {
        prompt: { $regex: query || "", $options: 'i' },
        tag: { $regex: tag || "", $options: 'i' }
      }).populate('creator');
    return new Response(JSON.stringify(res), { status: 200 });
  } catch (error) {
    return responseMessages("ServerError");
  }
}