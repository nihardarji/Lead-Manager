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
        }
        if(messageReducers){
            if(messageReducers.deleteLead)
                alert.success(messageReducers.deleteLead)
            if(messageReducers.addLead)
                alert.success(messageReducers.addLead)
        }
    }, [alertReducers, messageReducers])

    return (
        <div></div>
    )
}

export default Alerts
