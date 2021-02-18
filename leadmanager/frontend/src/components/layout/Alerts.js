import React, { useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useSelector } from 'react-redux'

const Alerts = () => {
    const alert = useAlert()
    
    const alertReducers = useSelector(state => state.alertReducers)
    const messageReducers = useSelector(state => state.messageReducers)

    useEffect(() => {
        if(alertReducers.status){
            if(alertReducers.msg.name)
                alert.error(`Name: ${alertReducers.msg.name.join()}`)
            if(alertReducers.msg.email)
                alert.error(`Email: ${alertReducers.msg.email.join()}`)
            if(alertReducers.msg.message)
                alert.error(`Message: ${alertReducers.msg.message.join()}`)
            if(alertReducers.msg.non_field_errors)
                alert.error(alertReducers.msg.non_field_errors.join())
            if(alertReducers.msg.username)
                alert.error(alertReducers.msg.username.join())
        }
        if(messageReducers){
            if(messageReducers.deleteLead)
                alert.success(messageReducers.deleteLead)
            if(messageReducers.addLead)
                alert.success(messageReducers.addLead)
            if(messageReducers.passwordsNotMatch)
                alert.error(messageReducers.passwordsNotMatch)
            
        }
    }, [alertReducers, messageReducers])

    return (
        <div></div>
    )
}

export default Alerts
