import React from 'react';
import thumbnail from '../images/thumbnail.jpeg';
import { BiImageAdd } from "react-icons/bi";
import '../css/articleCreation.css';

const ArticleCreation = () => {
	return (
		<div className='postingWrapper'>
			<div className='postingContainer'>
				<div className='postImageContainer'>
					<img className='postingImage' src={thumbnail} />
				</div>
				<form className='postingForm'>
					<div className='formGroup'>
						<label for="inputFile">
							<span className='imageIconContainer'>
								<BiImageAdd className='imageAddIcon' />
								<span>
									Add Image
								</span>
							</span>
						</label>
						<input type="file" id="inputFile" style={{ display: "none" }} />
						<input type="text" placeholder='Write Your Title...' className='titleText' />
						&nbsp;&nbsp;&nbsp;<textarea className='postArticle' placeholder='Write your thoughts...' type="text" rows="20">

						</textarea>
						<button className='publishButton'>Publish</button>
					</div>
				</form>
			</div >
		</div >
	)
}
export default ArticleCreation;