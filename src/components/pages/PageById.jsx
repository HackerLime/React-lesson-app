import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostItem from '../UI/post/PostItem'
import { useFetching } from '../hooks/useFetching'
import PostService from '../API/PostService'

const PageById = () => {
	const [post, setPost] = useState({})
	const [comments, setComments] = useState([])
	const params = useParams()
	const [fetchPostById, isPostLoading, postError] = useFetching(async () => {
		const response = await PostService.getPostById(params.id)
		setPost(response.data)
	})
	const [fetchCommentsById, isCommentsLoading, commentsError] = useFetching(async () => {
		const response = await PostService.getCommentsById(params.id)
		setComments(response.data)
	})
	useEffect(() => {
		fetchPostById()
		fetchCommentsById()
	}, [])
	return (
		<div>
			<h1>Страница поста № {params.id}</h1>
			{postError && <h1>Ошибка поста {postError}</h1>}
			{isPostLoading
				? <div>Загрузка...</div>
				: <PostItem post={post} />
			}
			{commentsError && <h1>Ошибка комментария {commentsError}</h1>}
			<div className="comments">
				{isCommentsLoading
					? <div>Загрузка...</div>
					: comments.map(comm =>
						<div className='comm' key={comm.id}>
							<div className="comm__id">{comm.id}</div>
							<div className="comm__name">{comm.name}</div>
							<div className="comm__body">{comm.body}</div>
							<div className="comm__email">{comm.email}</div>
						</div>
					)
				}
			</div>
		</div>

	)
}

export default PageById