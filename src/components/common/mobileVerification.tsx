import React, { useState } from 'react';
import { useNavigate} from 'react-router';

export default function MobileVerificationForm(props:any) {
    console.log(props)


  return (
    <div>
        {props?.data}
    </div>
  );
}