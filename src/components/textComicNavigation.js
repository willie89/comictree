import React, {Component} from 'react';

class TextComicNavigation extends Component {
	render() {
        return [
            <section className="comic_navigation" key="1">
                <span className={(this.props.currentComic === 0 ? 'hidden' : '') + " comic_navigation-button"} onClick={() => this.props.navComic('prev')}>newer</span>
                <span className={"comic_navigation-button"} style={{margin: '0px 10vw'}} onClick={() => this.props.navComic('rand')}>random</span>
                <span className={(this.props.Gallery.length - 1 === this.props.currentComic ? 'hidden' : '') + " comic_navigation-button "} onClick={() => this.props.navComic('next')}>older</span>
            </section>
        ]
	}
}

export default TextComicNavigation;
