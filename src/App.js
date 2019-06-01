import React, {Component} from 'react';
import FeaturedComic from './components/featuredComic';
import ThumbnailComicNavigation from './components/thumbnailComicNavigation';
import './App.css';
import Gallery from './images.json';

class App extends Component {
	constructor(props) {
		super(props)
		this.handleKeyDown = this.handleKeyDown.bind(this)
		this.setComic = this.setComic.bind(this)
		this.state = {
			currentComic: 0,
			test: 'testing'
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
				<FeaturedComic Gallery={Gallery} currentComic={currentComic}></FeaturedComic>
				<section className="comic_navigation">
					<div>
						<span className={"comic_navigation-button " + currentComic === 0 ? 'hidden' : null} onClick={this.prevComic}>newer</span>
						<span className={"comic_navigation-button"} style={{margin: '0px 10em'}} onClick={this.randComic}>random</span>
						<span className={"comic_navigation-button " + Gallery.length - 1 === currentComic ? 'hidden' : null} onClick={this.nextComic}>older</span>
					</div>
				</section>
				<ThumbnailComicNavigation Gallery={Gallery} currentComic={currentComic} setComic={this.setComic}></ThumbnailComicNavigation>
			</div>
		);
	}

	nextComic = () => {
		this.setState({ currentComic: this.state.currentComic + 1 })
	}

	prevComic = () => {
		this.setState({ currentComic: this.state.currentComic - 1 })
	}

	randComic = () => {
		let rand = Math.floor(Math.random() * (Gallery.length - 1))
		this.setState({ currentComic: rand })
	}

	setComic = (num) => {
		if (num !== this.state.currentComic) {
			this.setState({ currentComic: num })
		}
	}
}

export default App;
