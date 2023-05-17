export const getPages = (totalPosts, limit) => {
	return Math.ceil(totalPosts / limit)
}

export const getPagesArr = (pages) => {
	let arr = []
	for (let i = 0; i < pages; i++) {
		arr.push(i + 1)
	};
	return arr
}