import React, { useRef , useEffect } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {
	const {messages, loading} = useGetMessages();
	console.log("messages are ", messages);
	useListenMessages();
	const lastMessageRef = useRef();

	useEffect(() => {
    	if(messages.length > 0) 
		{
    	    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    	}
	}, [messages]);


	return (
		<div className='px-4 flex-1 overflow-auto'>
			{!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<Message key={message._id} message={message} />
				))}

			{loading && [...Array(7)].map((_, idx) => <MessageSkeleton key={'skeleton_' + idx} />)}

			{!loading && messages.length === 0 && (
				<p className='text-center'>Send a message to start the conversation</p>
			)}
			<div ref={lastMessageRef}/>
		</div>
	);
};
export default Messages;
