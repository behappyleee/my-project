import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
        <nav className="flex justify-between items-center bg-orange-600 px-8 py-4">
            <Link className="text-white font-bold text-2xl" href={"/"}>Next Crud</Link>
            <Link className="bg-slate-700 p-2 text-white font-bold" href={"/addItem"}>Add Item</Link>
        </nav>
    </div>
  )
}

export default Header