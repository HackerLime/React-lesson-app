import React from 'react'
import PostItem from './PostItem'

const PostList = ({ posts, remove }) => {
	if (!posts.length) {
		return <h1>Посты не найдены!</h1>
	}
	return (
		<div className="posts">
			<h1>Посты</h1>
			{posts.map((post, index) => <PostItem remove={remove} post={post} key={index + 1} id={index + 1} />)}
		</div>
	)
}

export default PostList