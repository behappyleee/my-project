import React from 'react';
import DeleteButton from './DeleteButton';
import { HiPencilAlt } from 'react-icons/hi';
import Link from 'next/link';

const ItemList = () => {
  return (
    <div className="p-4 border border-orange-500 my-2 flex justify-between items-start">
        <div>
            <h2 className="font-bold text-xl">Item List</h2>
            <div>Item Description</div>
        </div>
        <div className="flex gap-2">
            <DeleteButton />
            <Link href={"/editItem/1"}>
                <HiPencilAlt size={24}></HiPencilAlt>
            </Link>
        </div>
    </div>
  )
}

export default ItemList
