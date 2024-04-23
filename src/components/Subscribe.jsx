import React from 'react'
import { Button } from "react-bootstrap"
import { IoMailOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next"

export default function Subscribe() {
  let { t, i18n } = useTranslation()
  return (
    <div className='text-center bg-gray py-5 '>
      <h4 className='text-dark fw-bold'>Subscribe on our newsletter</h4>
      <p className='grayText'>Get daily news on upcoming offers from many suppliers all over the world</p>
      <div className='w-75 mx-auto'>
        <input type="text" className={`myBorder p-2 w-50 my-0 ${i18n.language === 'ar' ? 'rtl' : ''}`} placeholder={t('email')} />
        <Button variant="primary" className='mx-2'>Subscribe</Button>
      </div>
    </div>
  )
}
