import { useSelector } from "react-redux"

/* 
  there are FormMessage and InputMessage in auth form 
  InputMessage is part of a InputGroup component
  FormMessage is a separate component that needs its own hook
  to remind - both messages are simply error messages
 */
export const useFormMessage = () => {
  const messages = useSelector((state) => state.auth.messages)

  return messages?.form
}