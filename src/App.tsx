import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { useState } from 'react'
import { useParams } from 'react-router'
import { forgotPassword } from './service/api/Authentication.ts'
import './App.css'

function App() {
  const [password, setPassword] = useState('')
  const [passwordAgain, setPasswordAgain] = useState('')
  const [passwordError, setPasswordError] = useState<string | undefined>()
  const [isSuccess, setIsSuccess] = useState<boolean | undefined>()
  const params = useParams<{ token: string }>()

  function submit() {
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long')
      return
    }
    if (password !== passwordAgain) {
      setPasswordError('Passwords do not match')
      return
    }
    setPasswordError(undefined)
    if (params.token) {
      forgotPassword(
        {
          token: params.token,
          password,
        },
      ).then(() => {
        setIsSuccess(true)
      }).catch(() => {
        setIsSuccess(false)
      })
    }
  }

  return (
    <div
      className="flex flex-column justify-content-center align-items-center"
    >
      {
        isSuccess === undefined && (
          <div className="w-29rem flex flex-column gap-2">
            <InputText
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <div
              className="flex flex-column gap-1"
            >
              <InputText
                type="password"
                value={passwordAgain}
                onChange={e => setPasswordAgain(e.target.value)}
                onInput={() => setPasswordError(undefined)}
                invalid={passwordError !== undefined}
              />
              <small className="p-error">{passwordError}</small>
            </div>
            <Button
              label="Submit"
              onClick={submit}
            >
            </Button>
          </div>
        )
      }

      {
        isSuccess === true && (
          <div className="w-29rem flex flex-column gap-2">
            <h1>Password changed successfully</h1>
          </div>
        )
      }

      {
        isSuccess === false && (
          <div className="w-29rem flex flex-column gap-2">
            <h1>Failed to change password</h1>
          </div>
        )
      }
    </div>
  )
}

export default App
