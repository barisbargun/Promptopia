interface IPrompt{
  _id?:string;
  creator?:IUser;
  prompt:string;
  tag:string;
}

interface ICreatePrompt{
  userId?:string;
  prompt:string;
  tag:string;
}

interface IDeletePrompt{
  _id:string;
  userId?:string;
}