import React from 'react'
import MyInput from '../../inputs/MyInput'
import PostSelect from './PostSelect'

const PostFilter = ({ filter, setFilter }) => {
	return (
		<div className='filter'>
			<PostSelect
				value={filter.sort}
				onChange={e => setFilter({ ...filter, sort: e })}
				defaultValue='...СОРТИРОВКА ПО....'
				options={[
					{ name: 'по Названию', value: 'title' },
					{ name: 'по Описанию', value: 'body' },
				]}
			/>
			<MyInput
				value={filter.query}
				onChange={e => setFilter({ ...filter, query: e.target.value })}
				placeholder='Поиск по....' />
		</div>
	)
}

export default PostFilter