export const getPromptById = async (promptId: string) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/prompt/${promptId}`,
    {
      cache: "no-store",
    }
  )

  return await res?.json();
}

export const getPrompts = async (query?: string, tag?: string) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/prompt`,
    {
      cache: "no-store",
      method: "POST",
      body: JSON.stringify({
        query: query,
        tag: tag
      })
    }
  )
  return res.ok ? await res?.json() : null;
}

export const getPromptsByUserId = async (userId: string) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/user/${userId}/post`,
    {
      cache: "no-store"
    }
  )
  return res.ok ? await res?.json() : null;
}

export const getUserById = async (userId: string) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/user/${userId}`,
    {
      cache: "no-store"
    }
  )
  return res.ok ? await res?.json() : null;
} 