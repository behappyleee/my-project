import React from 'react'

const AddItem = () => {
  return (
    <div>
        <form className="flex flex-col mt-2 gap-3">
            <input 
                type="text" 
                className="border border-orange-500 px-7 py-2"
                placeholder="Enter Item Title"
            />  
            <input 
                type="text" 
                className="border border-orange-500 px-7 py-2"
                placeholder="Enter Item Description"
            />
              <button className="bg-slate-700 font-bold text-white px-7 py-2 w-fit">
                Submit
              </button>
        </form>
    </div>
  )
}

export default AddItem
