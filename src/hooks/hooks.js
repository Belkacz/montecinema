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

export function useAgeValidtor(valueOnStart, minAge) {
  const [value, setValue] = useState(valueOnStart);
  const [msg, setMsg] = useState(null);
  let today = new Date();
  let d = value.split("/");
  let birthDate = new Date(d[2] + "/" + d[1] + "/" + d[0]);

  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0) {
    age--;
  }
  if (m === 0 && today.getDate() < birthDate.getDate()) {
    age--;
  }

  return [
    value,
    {
      value,
      msg,
      onChange: (e) => {
        setValue(e.target.value);
        let valuelenght = new String(value);
        if (age < 18) {
          setMsg("You should be minium 18 years old");
        } else setMsg(null);
        console.log(age);
        //     if (age > 18) {
        //       setMsg(null);
        //     }
        //     if (age < 18) {
        //       setMsg("You should be minium 18 years old");
        //     }
      },
    },
  ];
}
