//increment
export function increment(index) {
	return {
		type: 'INCREMENT_LIKES',
		index: index
	};
}

//add comment
export function addCOmment(postId, author, comment) {
	return {
		type: 'ADD_COMMENT', 
		postId,
		author,
		comment
	};
}

//remove comment
export function removeComment(postId, i) {
	return {
		type: 'REMOVE_COMMENT', 
		i,
		postId
	};
}
