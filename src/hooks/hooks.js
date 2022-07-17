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
  const [birthDate, setBirthDate] = useState(valueOnStart);
  const [msg, setMsg] = useState(null);

  return [
    birthDate,
    {
      birthDate,
      msg,

      onChange: (e) => {
        setBirthDate(e.target.value);
        let today = new Date();
        let d = birthDate.split("/");
        let localbirthDate = new Date(d[2] + "/" + d[1] + "/" + d[0]);
        if (localbirthDate.getFullYear() < 120) {
          let age = today.getFullYear() - localbirthDate.getFullYear();
          console.log(age);
        }

        let m = today.getMonth() - localbirthDate.getMonth();
        
        // if (age > 18 && age < 100) {
        //   setMsg("You should be minium 18 years old");
        // } else setMsg(null);

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
