import { useState } from "react";

export function usePasswordValidtor(
  valueOnStart,
  regexletter,
  regexnum,
  minlenght
) {
  const [value, setValue] = useState(valueOnStart);
  const [msgletter, setMsgletter] = useState(null);
  const [msgnum, setMsgnum] = useState(null);
  const [msglenght, setMsglenght] = useState(null);
  return [
    value,
    {
      value,
      msglenght,
      msgnum,
      msgletter,
      onChange: (e) => {
        e.target.value.length < minlenght
          ? setMsglenght("At least 8 characters")
          : setMsglenght(null);
        e.target.value.match(regexletter)
          ? setMsgletter(null)
          : setMsgletter("At least one letter");
        e.target.value.match(regexnum)
          ? setMsgnum(null)
          : setMsgnum("At least one Digit");
        setValue(e.target.value);
      },
    },
  ];
}