import authOptions from '@app/api/auth/[...nextauth]/options';
import Feed from '@components/Feed';
import { getPromptsByUserId } from '@lib/data'
import { getServerSession } from "next-auth";

const UserPrompts = async ({ id }: { id: string }) => {
  const prompts = await getPromptsByUserId(id)
  const session: ISession | null = await getServerSession(authOptions);
  return (
    prompts &&
    <Feed prompts={prompts} showButtons={id == session?.user?.id} activeSearch={false} />
  )
}

export default UserPrompts