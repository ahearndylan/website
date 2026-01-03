const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-heading">Get in Touch</h2>
          <p className="section-subtitle">
            Send a message and I’ll get back to you as soon as I can.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <form
            action="https://formspree.io/f/xyzgvgnd"
            method="POST"
            className="card p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Name
                </label>
                <input type="text" name="name" required className="input" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input type="email" name="email" required className="input" />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Message
              </label>
              <textarea name="message" rows="6" required className="input" />
            </div>

            <div className="mt-6 flex items-center justify-end">
              <button type="submit" className="btn-primary">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
