import React from 'react'

export default function ImageComponent({ _class = '', _url = '' }) {
	return (
		<div>
			<img className={_class} src={_url} alt="project" />
		</div>
	)
}
