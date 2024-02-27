'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1, 'Name cannot be empty.'),
  email: z.string().email('Invalid email address.'),
  message: z.string().min(1, 'Message cannot be empty.'),
});

type Form = z.infer<typeof schema>;

export const ContactForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Form>({
    resolver: zodResolver(schema),
  });
  return (
    <form
      className="flex w-full flex-1 flex-col gap-2 rounded-xl border border-secondary p-8 md:flex-auto"
      onSubmit={handleSubmit(() => {})}
    >
      <label htmlFor="name">Name</label>
      <input
        id="name"
        {...register('name')}
        className="rounded-lg border border-secondary bg-transparent p-2 outline-2 outline-offset-2 outline-onPrimary focus:outline"
      />
      {errors.name && (
        <p className="text-sm text-error">{errors.name.message}</p>
      )}
      <label htmlFor="email">Email</label>
      <input
        id="email"
        {...register('email')}
        className="rounded-lg border border-secondary bg-transparent p-2 outline-2 outline-offset-2 outline-onPrimary focus:outline"
      />
      {errors.email && (
        <p className="text-sm text-error">{errors.email.message}</p>
      )}
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        {...register('message')}
        className="h-full max-h-96 resize-none rounded-lg border border-secondary bg-transparent p-2 outline-2 outline-offset-2 outline-onPrimary focus:outline md:h-auto md:min-h-[200px] md:resize-y"
      />
      {errors.message && (
        <p className="text-sm text-error">{errors.message.message}</p>
      )}
      <button className="mt-2 w-fit rounded-lg bg-accent px-4 py-2 text-onAccent transition-colors hover:bg-accent/80">
        Submit
      </button>
    </form>
  );
};
