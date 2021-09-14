import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { useValidator } from "./useValidator"


export const useAuthForm = (Validator) => {
  const history = useHistory()
  const values = useSelector((state) => state.auth.values)
  const hookValidator = useValidator(Validator)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const isValid = hookValidator.validate(values)
    if (isValid) {
      history.push('/page-success')
    }
  }

  return {handleSubmit,}
}