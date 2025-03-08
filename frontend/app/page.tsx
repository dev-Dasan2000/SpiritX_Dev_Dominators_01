import React from 'react'

import SuccessDialog from '@/components/SuccessDailog';

const page = () => {
  return (
    
      <div className="min-h-screen flex justify-center items-center">
      <SuccessDialog
        iconType="error"
        message="Your success message"
  subMessage="Your sub message"
  showProgressBar={true} // Set to false to display the Yes/No buttons
      />
 
    </div>
  )
}

export default page