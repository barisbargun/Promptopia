import Feed from "@components/Feed";
import { getPrompts } from "@lib/data";

const AllPrompts = async ({ searchParams }: { searchParams: ISearchParams }) => {
  const prompts = await getPrompts(searchParams?.query, searchParams?.tag);
  return (
    prompts && <Feed prompts={prompts} />
  )
}

export default AllPrompts