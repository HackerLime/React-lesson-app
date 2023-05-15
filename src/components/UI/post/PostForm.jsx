import React, { useState } from 'react'
import MyInput from '../inputs/MyInput'
import MyButton from '../buttons/MyButton'

const PostForm = ({ create }) => {
	const [post, setPost] = useState({ id: Date.now(), title: '', body: '' })
	const newPost = (e) => {
		e.preventDefault()
		create(post)
		setPost({ id: Date.now(), title: '', body: '' })
	}
	return (
		<form>
			<MyInput
				value={post.title}
				onChange={e => setPost({ ...post, title: e.target.value })}
				placeholder='Название поста' />
			<MyInput
				value={post.body}
				onChange={e => setPost({ ...post, body: e.target.value })}
				placeholder='Описание поста' />
			<MyButton onClick={newPost}>New Post</MyButton>
		</form>
	)
}

export default PostForm