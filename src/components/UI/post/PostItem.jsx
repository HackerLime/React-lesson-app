import React from 'react'
import MyButton from '../buttons/MyButton'
const PostItem = ({ post, id, remove }) => {
	return (
		<div className="post">
			<div className="post__text">
				<strong>{id}. {post.title}</strong>
				<div >{post.body}</div>
			</div>
			<div className="post__btns">
				<MyButton onClick={() => remove(post)}>УДАЛИТЬ</MyButton>
			</div>
		</div>
	)
}

export default PostItem