import React, { useEffect, useState } from 'react';
import PostList from '../../components/UI/post/PostList';
import PostForm from '../../components/UI/post/PostForm';
import { usePosts } from '../../components/hooks/usePosts';
import PostFilter from '../../components/UI/post/postFilters/PostFilter';
import PostService from '../../components/API/PostService';
import { useFetching } from '../../components/hooks/useFetching';
import { getPages, getPagesArr } from '../../components/utils/pages';

function Posts() {
	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState({ sort: '', query: '' })
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
	const [page, setPage] = useState(1)
	const [limit, setLimit] = useState(10)
	const [totalPages, setTotalPages] = useState(0)
	const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
		const response = await PostService.getById(page, limit)
		setPosts(response.data)
		const totalPosts = response.headers['x-total-count']
		setTotalPages(getPages(totalPosts, limit))
	})
	const pagesArray = getPagesArr(totalPages)
	useEffect(() => {
		fetchPosts()
	}, [page])
	const createPost = (post) => {
		setPosts([...posts, post])
	}
	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}
	const changePage = (p) => {
		setPage(p)
	}
	return (
		<div className="App">
			<div className='container'>
				<PostForm create={createPost} />
				<hr />
				<PostFilter filter={filter} setFilter={setFilter} />
				<hr />
				{postError && <h1>Ошибка запроса {postError}</h1>}
				{isPostsLoading
					? <h1>Загрузка....</h1>
					: <PostList remove={removePost} posts={sortedAndSearchedPosts} />
				}
				<div className="pagination">
					{pagesArray.map(p =>
						<span
							className={p === page ? 'page page_cur' : 'page'}
							onClick={() => changePage(p)} key={p}>{p}</span>)}
				</div>
			</div>
		</div>
	);
}

export default Posts;
