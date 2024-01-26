interface ISearchParams {
  query?: string
  tag?: string
}

interface ISession {
  user?: {
    id?: string | null
    name?: string | null
    email?: string | null
    image?: string | null
  }
  expires: string;
}