import React from 'react'

function ContactForm() {
  return (
    <div className='w-full flex justify-start'>
      <div className="flex flex-col items-center">
        <h2 className="font-robotoSlab text-xl sm:text-2xl">
          Send me a message
        </h2>
        <form
          action="/"
          method="POST"
          name="contact"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div className="text-lg sm:text-xl">
            <div className="form-control my-2">
              <label className="input-group">
                <span>Email</span>
                <input
                  required={true}
                  type="email"
                  name="email"
                  id="email"
                  placeholder=""
                  className="input-bordered input"
                />
              </label>
            </div>
            <div className="form-control my-2">
              <textarea
                required={true}
                id="message"
                name="message"
                className="textarea-bordered textarea w-full"
                placeholder="Your message.."
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn-outline btn-primary btn mx-auto w-fit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
