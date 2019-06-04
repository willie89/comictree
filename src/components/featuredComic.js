import React, {Component} from 'react';

class FeaturedComic extends Component {
	render() {
		return (
            <section className="comic_section">
                { this.renderComic(this.props.featuredComic) }
            </section>
		);
	}

    renderComic = (obj) => {
        return [
            <div key={obj.date}>
                <h2 className="comic_title">{obj.title}</h2>
                <div className="comic_wrapper">
                    <img onClick={() => this.props.navComic('next')} className="comic_image" alt={obj.title} src={obj.image} />
                    <p className="comic_meta-data">
                        <i className="comic_subtitle">{obj.subtitle}</i>
                        <small className="comic_date FR">Created on: {obj.date}</small>
                    </p>
                </div>
            </div>
        ]
    }	
}

export default FeaturedComic;
