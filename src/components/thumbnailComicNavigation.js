import React, {Component} from 'react';

class ThumbnailComicNavigation extends Component {
	render() {
        return [
            <section className="comic_thumbnail_navigation" key="1">
                { this.props.Gallery.map((obj, i) => this.renderComicNavigation(obj, i)) }
            </section>
        ]
	}

	renderComicNavigation = (obj,i) => {
		return [
			<div onClick={() => this.props.setComic(i)} key={i} className={(this.props.currentComic === i ? "selected" : "") + " comic_image-small-wrapper"}>
				<img className="comic_image-small" alt={obj.title} src={obj.thumbnail} />
			</div>
		]
	}
}

export default ThumbnailComicNavigation;
