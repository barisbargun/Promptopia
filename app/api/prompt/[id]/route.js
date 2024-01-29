import Post from "@models/post";
import { connectToDB } from "@utils/database";
import responseMessages from "@lib/responseMessages";

export const GET = async (req, { params }) => {
  const { id } = params

  try {
    await connectToDB();
    const res = await Post.findById(id);
    return new Response(JSON.stringify(res), { status: 200 });
  } catch (error) {
    return responseMessages("ServerError");
  }
}

export const PATCH = async (req, { params }) => {
  const { prompt, tag } = await req.json();
  try {
    await connectToDB();
    const res = await Post.findById(params.id);
    if (!res) return responseMessages("BadRequest");

    res.prompt = prompt;
    res.tag = tag;
    res.save();

    return responseMessages("Success");
  } catch (error) {
    return responseMessages("ServerError");
  }

}

export const DELETE = async (req) => {

  const { _id } = await req.json();

  try {
    await connectToDB();
    await Post.findByIdAndDelete(_id);

    return responseMessages("Success");
  } catch (error) {
    return responseMessages("ServerError");
  }

}