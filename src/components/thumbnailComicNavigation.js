import React, {Component} from 'react';

class ThumbnailComicNavigation extends Component {
	constructor(props) {
        super(props)
	}
	
	render() {
        return [
            <section className="comic_thumbnail_navigation">
                { this.props.Gallery.map((obj, i) => this.renderComicNavigation(obj, i)) }
            </section>
        ]
	}

	renderComicNavigation = (obj,i) => {
		return [
			<div onClick={() => this.props.setComic(i)} key={i} className="comic_image-small-wrapper">
				<img className="comic_image-small" alt={obj.title} src={obj.image} />
			</div>
		]
	}
}

export default ThumbnailComicNavigation;
