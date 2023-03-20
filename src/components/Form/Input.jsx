import React, { useEffect, useReducer, useRef, useState } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return { ...state, value: action.val };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, { value: "" });

  const { id, onInput } = props;
  const { className } = props;
  const { value } = inputState;
  const phoneInputRef = useRef(null);

  useEffect(() => {
    let phoneInput;

    if (phoneInputRef.current) {
      phoneInput = intlTelInput(phoneInputRef.current, {
        separateDialCode: true,
        initialCountry: "tr",
      });
    }

    return () => {
      if (phoneInput) {
        phoneInput.destroy();
      }
    };
  }, []);

  useEffect(() => {
    onInput(id, value);
  }, [id, onInput, value]);

  const changeHandler = (event) => {
    console.log(event.target.id, "event");
    dispatch({
      type: "CHANGE",
      val: event.target.value,
    });
  };

  const phoneLabelClassName =
    phoneInputRef.current && phoneInputRef.current.value !== ""
      ? "-translate-y-[10px] text-sm text-[#1175ca] left-[110px] top-0 phone"
      : " left-[110px] top-0 phone";

  const element =
    props.element === "input" ? (
      <input
        className={`input-field absolute w-full h-[50px] pt-3 pl-3 appearance-none text-gray-700 leading-tight outline-none focus:outline-none  `}
        id={props.id}
        name={props.name}
        // type={props.type}
        // placeholder={props.placeholder}
        onChange={changeHandler}
        value={inputState.value}
        required
        ref={props.type === "tel" ? phoneInputRef : null}
      />
    ) : (
      <textarea
        className="input-field absolute pt-5 pl-3 appearance-none text-gray-700 leading-tight outline-none focus:outline-none resize-none"
        id={props.id}
        name={props.name}
        // type={props.type}
        rows={3}
        onChange={changeHandler}
        value={inputState.value}
        required
      />
    );

  return (
    <div
      className={`relative border-b-4 h-[50px] min-w-[270px] w-full rounded-sm capitalize focus-within:border-blue-primary ${className}`}
    >
      {element}
      <label
        className={`absolute pt-[12.50px] ml-3 input-label transition-all duration-200 ease-in-out text-[#3B4154] cursor-text select-none ${
          props.type === "tel" ? phoneLabelClassName : ""
        }`}
        htmlFor={props.id}
      >
        {props.label}*
      </label>
    </div>
  );
};

export default Input;
