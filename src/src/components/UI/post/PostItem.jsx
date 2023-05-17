import React from 'react'
import MyButton from '../buttons/MyButton'
import { useNavigate } from 'react-router-dom'

const PostItem = ({ post, id, remove }) => {
	const navigate = useNavigate()


	return (
		<div className="post">
			<div className="post__text">
				<strong>{post.id}. {post.title}</strong>
				<div >{post.body}</div>
			</div>
			<div className="post__btns">
				<MyButton onClick={() => remove(post)}>УДАЛИТЬ</MyButton>
				<MyButton onClick={() => navigate(`/posts/${post.id}`)} >ОТКРЫТЬ</MyButton>
			</div>
		</div>
	)
}

export default PostItem