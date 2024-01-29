"use server"

const promptCache:RequestInit  = {
  cache: "force-cache",
  next:{tags:['promptCollection']}
}

export const getPromptById = async (promptId: string) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/prompt/${promptId}`, promptCache
  )

  return res.ok ? await res?.json() : null;
}

export const getPrompts = async (query?: string, tag?: string) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/prompt`,
    {
      method: "POST",
      body: JSON.stringify({
        query: query,
        tag: tag
      }),
      ...promptCache
    }
  )
  return res.ok ? await res?.json() : null;
}

export const getPromptsByUserId = async (userId: string) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/user/${userId}/post`, promptCache
  )
  return res.ok ? await res?.json() : null;
}

export const getUserById = async (userId: string) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/user/${userId}`,
    {
      cache: "force-cache"
      
    }
  )
  return res.ok ? await res?.json() : null;
} 