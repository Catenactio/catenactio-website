'use client'
import React from 'react'

export const Hero = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col justify-between lg:flex-row">
        <div className="mb-12 lg:max-w-lg lg:pr-10 lg:mb-0">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Your Trusted
              <br className="hidden md:block" />
              Partners in a{' '}
              <span className="inline-block text-brandRed">
                Trustless World.
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Providing tailored solutions that empower you to focus on your
              creative work, while we take care of the technical details.
            </p>
          </div>
          <hr className="mb-6 border-gray-300" />
        </div>
        <div className="grid self-center items-center  px-5 pt-5 pb-5z bg-brandDark text-center border border-gray-300 rounded lg:w-2/5 max-h-40">
          <div className="mb-2 font-semibold">Client Portal</div>
          <div className="flex justify-center btn-red w-full mb-3 h-fit rounded">
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              <div className="flex items-center ">
                <div className="mr-3 font-semibold text-white"> Login</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
