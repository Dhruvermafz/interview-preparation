import React, {useState} from 'react'
import OtpInput from './otp-input'
const PhoneOtpForm = () => {
    const [phoneNumber, setPhoneNumber] = useState("")
    const [showOtpInput, setShowInput] = useState(false)

    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value)
    }

    const handlePhoneSubmit = (e) => {
        e.preventDefault()

        const regex = /[^0-9]/g;
        if(phoneNumber.length < 10 || regex.test(phoneNumber)) {
            alert("Invalid Phone Number")
            return;
        }


        setShowInput(true)
    }

    const onOtpSubmit = (otp) => {
        console.log("Login Successful", otp)
    }
  return (
    <div>
      {!showOtpInput ? (
        <form onSubmit={handlePhoneSubmit}
        >
            <input type='text' value={phoneNumber} onChange={handlePhoneNumber} placeholder='Enter Phone Number'/>
            <button type='submit'>Submit</button>

        </form>
      ) : (
        <div>
            <p>Enter OTP sent to {phoneNumber}</p>
            <OtpInput length={4} onOtpSubmit={onOtpSubmit}/>
        </div>
      )}
    </div>
  )
}

export default PhoneOtpForm
