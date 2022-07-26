import React from 'react'

export const reducer = (state, action) => {
	switch (action.type) {
		case 'FILTER_MY_BEST':
			return {
				// newMyBest: [...state].filter(t =>
				// 	t.value === true
				// )

			}
		case 'ADD_MY_BEST':
			return {
myBest: [...state].map(l=>l.id===action.id)
			}
		default:
			return state
	}
};
