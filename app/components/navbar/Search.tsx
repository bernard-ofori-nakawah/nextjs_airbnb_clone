"use client"

import {BiSearch} from "react-icons/bi"
 
const Search = () => {
  return (
    <div
      className="
        border-[1px]
        w-full
        py-2
        md:w-auto
        rounded-full
        shadow-sm
        hover:shadow-md
        transition
        cursor-pointer
      "
    >
      <div 
        className="
          flex
          flex-row
          items-center
          justify-between
        "
      >
        <div
          className="
            text-sm
            font-semibold
            px-6
          "
        >
          anywhere
        </div>
        <div
          className="
            hidden
            sm:block
            text-sm
            font-semibold
            flex-1
            border-x-[1px]
            px-6
            text-center
          "
        >
          Any Week
        </div>
        <div 
          className="
            text-sm
            pl-6
            pr-2
            text-gray-600
            flex
            flex-row
            gap-3
            items-center
          "
        >
          <div className="hidden sm:block">Add Guests</div>
          <div className="p-2 bg-rose-500 rounded-full text-white">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search