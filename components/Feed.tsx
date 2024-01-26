import PromptCard from './PromptCard';

type props = {
  prompts: IPrompt[];
  showButtons?: boolean;
  activeSearch?: boolean;
}

const Feed = async ({ prompts, showButtons, activeSearch }: props) => {
  return (
    prompts &&
    <ul className='grid grid-cols-1 w-full gap-4 md:grid-cols-2 xl:grid-cols-3'>
      {prompts?.reverse().map((v: IPrompt) =>
      <PromptCard key={v._id} prompt={v} showButtons={showButtons} activeSearch={activeSearch}/>)}
    </ul>
  )
}

export default Feed