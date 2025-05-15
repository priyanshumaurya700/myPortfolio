'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object()
  .shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    contact: yup
      .string()
      .matches(/^\d{10}$/, "Contact must be 10 digits")
      .required("Contact is required"),
    message: yup.string().required("Message is required"),
  })

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmit1 = (data) => {
    console.log(data)
    Swal.fire({
      title: 'Success!',
      icon: "success",
      text: 'Thanks for Contacting with us !',
      confirmButtonText: "OK"
    })
  }
  return (
    <>
      <div className='contact py-5'>
        <div className='container'>
          <div className='row'>
            <h2 className='text-center mb-4 font_design mt-2'>Contact With Us</h2>
            <div className='col-sm-6 d-flex align-items-center justify-content-center'>
              <div className='row'>
                <div className="col-sm-12">
                  <Image
                    src="/web.png"
                    className="img-fluid mt-5"
                    height={350}
                    width={350}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className='col-sm-6'>
              <div className='row'>
                <div className='col-sm-12'>
                  <form onSubmit={handleSubmit(handleSubmit1)} className='border rounded p-4'>
                    <div className='mb-2'>
                      <label>Name</label>
                      <input type='text' id='name' {...register('name')} placeholder='Enter Your Name...' className='form-control' />
                      {errors.name?.message && <p className='text-danger'>{errors.name?.message}</p>}
                    </div>
                    <div className='mb-2'>
                      <label>Email</label>
                      <input type='email' id='email' {...register('email')} placeholder='Enter Your Email...' className='form-control' />
                      {errors.email?.message && <p className='text-danger'>{errors.email?.message}</p>}
                    </div>
                    <div className='mb-2'>
                      <label>Contact No</label>
                      <input type='number' id='mobile'{...register('contact')} placeholder='Enter Your Contact No...' className='form-control' />
                      {errors.contact?.message && <p className='text-danger'>{errors.contact?.message}</p>}
                    </div>
                    <div className='mb-2'>
                      <label>Message</label>
                      <textarea id='message' {...register('message')} placeholder='Enter Your Message...' rows='4' className='form-control' ></textarea>
                      {errors.message?.message && <p className='text-danger'>{errors.message?.message}</p>}
                    </div>
                    <div className='mb-2'>
                      <input type='submit' className='btn1' />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
