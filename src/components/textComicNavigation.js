import React, {Component} from 'react';

class TextComicNavigation extends Component {
	constructor(props) {
        super(props)
	}
	
	render() {
        return [
            <section className="comic_navigation">
                <div>
                    <span className={this.props.currentComic === 0 ? 'hidden' : null + "comic_navigation-button"} onClick={this.props.navComic('prev')}>newer</span>
                    <span className={"comic_navigation-button"} style={{margin: '0px 10em'}} onClick={this.props.navComic('rand')}>random</span>
                    <span className={this.props.Gallery.length - 1 === this.props.currentComic ? 'hidden' : null + "comic_navigation-button "} onClick={this.props.navComic('next')}>older</span>
                </div>
            </section>
        ]
	}
}

export default TextComicNavigation;
