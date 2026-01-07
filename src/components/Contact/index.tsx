"use client";
import { useState } from "react";
import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <section
      id="contact"
      className="relative z-10 overflow-hidden py-16 md:py-20 lg:py-28 bg-white dark:bg-gray-dark"
      style={{
        backgroundImage: "url('/images/hero/background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-xs bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Get in Touch
              </h2>
              {status === 'success' && (
                <div className="mb-8 rounded-xs bg-green-500/10 p-4 text-green-600 dark:text-green-400">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {status === 'error' && (
                <div className="mb-8 rounded-xs bg-red-500/10 p-4 text-red-600 dark:text-red-400">
                  Error: {errorMessage}. Please try again.
                </div>
              )}
              <form
                name="Contact"
                method="POST"
                data-netlify="true"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setStatus('sending');
                  const form = e.target as HTMLFormElement;
                  const name = (form.elements.namedItem('name') as HTMLInputElement)?.value || '';
                  const email = (form.elements.namedItem('email') as HTMLInputElement)?.value || '';
                  const company = (form.elements.namedItem('company') as HTMLInputElement)?.value || '';
                  const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value || '';

                  try {
                    // Netlify AJAX form submission: send as application/x-www-form-urlencoded
                    const params = new URLSearchParams();
                    params.append('form-name', 'Contact');
                    params.append('name', name);
                    params.append('email', email);
                    params.append('company', company);
                    params.append('message', message);

                    const response = await fetch('/', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                      body: params.toString(),
                    });

                    if (response.ok) {
                      setStatus('success');
                      form.reset();
                    } else {
                      setStatus('error');
                      const text = await response.text();
                      setErrorMessage(text || 'Unknown error');
                    }
                  } catch (error) {
                    setStatus('error');
                    setErrorMessage('Network error');
                  }
                }}
              >
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="name" className="mb-3 block text-sm font-medium text-dark dark:text-white">Your Name</label>
                      <input name="name" type="text" placeholder="Enter your name" className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none" />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="email" className="mb-3 block text-sm font-medium text-dark dark:text-white">Your Email</label>
                      <input name="email" type="email" placeholder="Enter your email" className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none" />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label htmlFor="company" className="mb-3 block text-sm font-medium text-dark dark:text-white">Company</label>
                      <input name="company" type="text" placeholder="Enter your company name" className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none" />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label htmlFor="message" className="mb-3 block text-sm font-medium text-dark dark:text-white">Your Message</label>
                      <textarea name="message" rows={5} placeholder="Enter your Message" className="border-stroke w-full resize-none rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button type="submit" disabled={status === 'sending'} className="rounded-xs bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark disabled:opacity-50 disabled:cursor-not-allowed">
                      {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* Removed NewsLatterBox (subscribe to receive future updates) section */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
