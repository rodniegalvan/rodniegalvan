//components
import Circles from "../../components/Circles";

//icons
import { BsArrowRight } from "react-icons/bs";

//framer
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("myzeyvnj");
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text form*/}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-0"
          >
            Let&apos;s <span className="text-accent">connect.</span>
            <p className="text-lg text-gray-300 mb-6">
            Feel free to reach out! Use the form below or{" "}
            <a
              href="mailto:galvanrodnie@gmail.com"
              className="text-accent"
            >
              email me <span className="text-gray-300">at</span> galvanrodnie@gmail.com
            </a>
            .
          </p>
          </motion.h2> 
          {/* form */}
          {state.succeeded ? (
            <p className="text-green-400 text-center">Thank you! I&apos;ll get back to you soon.</p>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex-1 flex flex-col gap-6 w-full mx-auto"
            >
              {/* input group */}
              <div className="flex gap-x-6 w-full">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="input lowercase"
                />
              </div>
              <ValidationError prefix="Email" field="email" errors={state.errors} />
              
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="input"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="textarea"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />

              <button
                type="submit"
                disabled={state.submitting}
                className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  {state.submitting ? "Sending..." : "Let’s Talk"}
                </span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
              </button>
            </motion.form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
