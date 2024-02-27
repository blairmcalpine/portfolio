import { ContactForm } from '@/components/ContactForm';
import { Send } from '@/icons/Send';
import { Metadata } from 'next';

const ContactPage = () => {
  return (
    <div className="grid h-[calc(100dvh-4rem)] w-full place-items-center p-4">
      <div className="flex h-full max-w-lg flex-col items-center gap-8 md:h-auto">
        <div className="flex w-full items-center gap-2">
          <h1 className="text-6xl font-bold md:text-7xl">Contact Me</h1>
          <Send width={72} height={72} className="hidden md:block" />
        </div>
        <p className="text-tertiary">
          To get in contact with me regarding questions or opportunities, you
          can{' '}
          <a
            className="text-onPrimary underline"
            href="mailto:blair.mcalpine77@gmail.com"
          >
            send me an email
          </a>{' '}
          or fill out the form below:
        </p>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;

export const metadata: Metadata = {
  title: 'Contact',
};
