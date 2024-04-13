import React from 'react'
import { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';

const SearchInput = () => {

  const [search, setSearch] = useState("");

  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(! search) return;
    if(search.length < 3)
    {
      toast.error("Please enter at least 3 characters")
    }
    const conversation = conversations.find((conversation) => conversation.fullName.toLowerCase().includes(search.toLowerCase()));
    if(conversation)
    {
      setSelectedConversation(conversation);
      setSearch("");
    }
    else
    {
      toast.error("No such user found");
    }
  }

  return (
    <form className='flex items-center gap-2' onSubmit={handleSubmit}>
        <input type="text" placeholder='Search here...' className='input input-bordered rounded-full'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className='btn btn-circle bg-green-500 text-white'>
            <IoSearchSharp className='w-6 h-6 outline-none'/>
        </button>
    </form>
  )
}

export default SearchInput