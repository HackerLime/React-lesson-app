import React, { useEffect, useState } from 'react';
import PostList from './components/UI/post/PostList';
import PostForm from './components/UI/post/PostForm';
import { usePosts } from './components/hooks/usePosts';
import PostFilter from './components/UI/post/postFilters/PostFilter';
import PostService from './components/API/PostService';
import { useFetching } from './components/hooks/useFetching';

function App() {
	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState({ sort: '', query: '' })
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

	const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
		const response = await PostService.getAll()
		setPosts(response.data)
	})
	useEffect(() => {
		fetchPosts()
	}, [])
	const createPost = (post) => {
		setPosts([...posts, post])
	}
	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
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
			</div>
		</div>
	);
}

export default App;
