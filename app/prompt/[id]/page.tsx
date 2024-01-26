import Form from '@components/Form';
import { getPromptById } from '@lib/data'
import React from 'react'

const page = async ({ params }: { params: { id: string } }) => {
  const prompt = await getPromptById(params.id);
  return (
    prompt &&
    <Form type='Update' prompt={prompt} />
  )
}

export default page