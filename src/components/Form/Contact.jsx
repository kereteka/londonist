import React, { useEffect } from "react";
import { useForm } from "../hook/form-hook";
import Input from "./Input";

const Contact = (props) => {
  const [formState, inputHandler] = useForm({
    title: { value: "" },
    description: { value: "" },
    address: { value: "" },
    area: { value: "" },
    phone: { value: "" },
  });

  useEffect(() => {
    const observer = new MutationObserver((mutationsList) => {
      const elements = Array.from(
        document.getElementsByClassName("iti__selected-dial-code")
      );
      elements.map((element) => {
        inputHandler("area", element.textContent);
      });
    });
    const targetNode = document.body;
    const config = { attributes: true, childList: true, subtree: true };
    observer.observe(targetNode, config);
    return () => {
      observer.disconnect();
    };
  }, [inputHandler]);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };
  return (
    <form className="w-full h-full" onSubmit={submitHandler}>
      <div className="w-full h-full p-2 flex flex-col gap-4 items-center justify-center">
        <Input
          id="name"
          element="input"
          type="text"
          label="Name"
          onInput={inputHandler}
          className="bg-white"
        />
        <Input
          id="surname"
          element="input"
          type="text"
          label="Surname"
          onInput={inputHandler}
          className="bg-white"
        />
        <Input
          id="email"
          element="input"
          type="email"
          label="Email"
          onInput={inputHandler}
          className="bg-white"
        />
        <Input
          id="phone"
          element="input"
          type="tel"
          label="phone"
          onInput={inputHandler}
          className="bg-white"
        />
        <Input
          id="message"
          element="textarea"
          type="text"
          label="Message"
          onInput={inputHandler}
          className="bg-white"
        />
      </div>
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default Contact;
