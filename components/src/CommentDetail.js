import React from 'react'

const CommentDetail = props => {
  return (
		<div className='comment'>
			<a href='/' className='avatar'>
				<img alt='avatar' src={props.image} />
			</a>
			<div className='content'>
				<a href='/' author='author'>
					{props.author}
				</a>
				<div>                       
					<span className='date'>{props.timeAgo}</span>
				</div>
				<div className='text'>{props.message}</div>
			</div>
		</div>
  )
}

export default CommentDetail