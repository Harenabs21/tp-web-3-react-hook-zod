'use client'
import React from 'react'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form';

const Content = z.object({
    name: z.string(),
    email: z.string().email(),
    number: z.string().min(10, {message: "number must be a minimum of 10 numbers"}).max(10, {message: "number must be a maximum of 10 numbers"}),
    message: z.string()
})
type formContent = z.infer<typeof Content>

function page() {
    const {register, handleSubmit} = useForm<formContent>({
        resolver: zodResolver(Content)
    });
    const onSubmit: SubmitHandler<formContent> = (data) => console.log(data)
  return (
    <div className='flex flex-col gap-3 items-center justify-center'>
        <h1 className='font-bold text-3xl'>Contact</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
                <label htmlFor="name">Name</label>
                <input id='name' type="text" {...register("name")} />
                <label htmlFor="email" >Email</label>
                <input id='email' type="email" {...register("email")}/>
                <label htmlFor="number">Number</label>
                <input id='number' type="text" {...register("number")}/>
                <label htmlFor="message">Message</label>
                <textarea id='message' {...register("message")} />
                <button type='submit' className=' bg-indigo-500 rounded text-white'>submit</button>  
        </form>
    </div>
  )
}

export default page