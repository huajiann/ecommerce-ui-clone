import React from 'react'
import { Badge } from 'react-bootstrap'

const Countdown = () => {
    return (
        <div className="flashsale">
        <Badge className="flashsale__clock">
          <p className="flashsale__time">12</p>
        </Badge>
        <Badge className="flashsale__clock" >
          <p className="flashsale__time">00</p>
        </Badge>
        <Badge className="flashsale__clock">
          <p className="flashsale__time">00</p>
        </Badge>
      </div>
    )
}

export default Countdown
