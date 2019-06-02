import React, {Component} from 'react';
import FeaturedComic from './components/featuredComic';
import ThumbnailComicNavigation from './components/thumbnailComicNavigation';
import TextComicNavigation from './components/textComicNavigation';
import './App.css';
import Gallery from './images.json';

class App extends Component {
	constructor(props) {
		super(props)
		this.handleKeyDown = this.handleKeyDown.bind(this)
		this.setComic = this.setComic.bind(this)
		this.navComic = this.navComic.bind(this)
		this.state = {
			currentComic: 0,
		}
	}
    handleKeyDown(e) {
		const { currentComic } = this.state
		if (e.keyCode === 39 && Gallery.length - 1 !== currentComic) {
			this.nextComic()
		} else if (e.keyCode === 37 && currentComic !== 0) {
			this.prevComic()
		}
	}

	componentDidMount(){
		document.addEventListener("keydown", this.handleKeyDown, false);
	}
	
	render() {
		const { currentComic } = this.state
		return (
			<div className="App">
				<header>Comic Tree</header>
				<FeaturedComic
					featuredComic={Gallery[currentComic]}>
				</FeaturedComic>
				<TextComicNavigation 
					Gallery={Gallery} 
					currentComic={currentComic}
					navComic={this.navComic}>
				</TextComicNavigation>
				<ThumbnailComicNavigation 
					Gallery={Gallery} 
					currentComic={currentComic} 
					setComic={this.setComic}>
				</ThumbnailComicNavigation>
			</div>
		);
	}

	navComic = (navigation) => {
		if (navigation !== null) {
			switch (navigation) {
				case 'prev':
					this.setState({ currentComic: this.state.currentComic - 1 })
					break
				case 'next':
					this.setState({ currentComic: this.state.currentComic + 1 })
					break
				case 'rand':
					let rand = Math.floor(Math.random() * (Gallery.length - 1))
					this.setState({ currentComic: rand })
					break
				default:
			}
		}
	}

	setComic = (num) => {
		if (num !== this.state.currentComic) {
			this.setState({ currentComic: num })
		}
	}
}

export default App;
