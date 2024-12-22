import React from 'react'


import { DiReact } from 'react-icons/di'
import { SiTailwindcss } from 'react-icons/si'

function Footer() {
  return (
    <div
      style={{
        backgroundSize: '13%',
        backgroundPosition: 'bottom right',
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url(images/bgFooter.png)'
      }}
      className="lg:p-5 bg-slate-900 flex flex-col justify-center items-center"
    >
      <div>
        <p className="font-semibold text-white">BAKHELAL Nabil</p>
      </div>
      <div className="flex mt-2 lg:mt-5 text-2xl justify-between w-24 text-slate-500">
      <p className="text-sm text-white flex items-center">
        contact@bakhelal-nabil.com</p>          
      </div>
      <div className="text-white mt-2 lg:mt-5">
        <p className="text-sm text-white flex items-center">
          Made with ❤️ /{' '}
          <span className="text-2xl ml-1 text-blue-300">{<DiReact />}</span> /{' '}
          <span className="text-2xl ml-1 text-blue-300">
            {<SiTailwindcss />}
          </span>
        </p>
      </div>
    </div>
  )
}

export default Footer
