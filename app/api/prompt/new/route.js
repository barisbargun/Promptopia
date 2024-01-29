import Post from "@models/post";
import { connectToDB } from "@utils/database";
import responseMessages from "@lib/responseMessages";

export const POST = async (req) => {
  const { userId, prompt, tag } = await req.json();

  try {
    await connectToDB();
    const res = await Post.create({
      creator: userId,
      prompt,
      tag
    });
    return responseMessages("Success");
  } catch (error) {
    return responseMessages("ServerError");
  }
}