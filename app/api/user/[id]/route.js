import User from "@models/user";
import { connectToDB } from "@utils/database";

export const GET = async (req, { params }) => {
  const { id } = await params;
  try {
    await connectToDB();
    const res = await User.findById(id);
    return new Response(JSON.stringify(res), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
  }
}