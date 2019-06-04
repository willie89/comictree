import React, {Component} from 'react';
import FeaturedComic from './components/featuredComic';
import ThumbnailComicNavigation from './components/thumbnailComicNavigation';
import TextComicNavigation from './components/textComicNavigation';
import Swipe from 'react-easy-swipe';
import './App.css'; 
import Gallery from './images.json';

class App extends Component {
	constructor(props) {
		super(props)
		this.handleKeyDown = this.handleKeyDown.bind(this)
		this.setComic = this.setComic.bind(this)
		this.navComic = this.navComic.bind(this)
		this.onSwipeMove = this.onSwipeMove.bind(this)
		this.state = {
			currentComic: 0,
		}
	}

	onSwipeMove(position, event) {
		if (position.x > 50) {
			this.navComic('next')
		} 

		if (position.x < -50) {
			this.navComic('prev')
		}
	}

	handleKeyDown(e) {
		if (e.keyCode === 39) {
			this.navComic('next')
		} else if (e.keyCode === 37) {
			this.navComic('prev')
		}
	}

	componentDidMount(){
		document.addEventListener("keydown", this.handleKeyDown, false);
	}
	
	render() {
		const { currentComic } = this.state
		return (
			<div className="App">
				<header></header>
				<Swipe
        onSwipeStart={this.onSwipeStart}
        onSwipeMove={this.onSwipeMove}
        onSwipeEnd={this.onSwipeEnd}>
					<FeaturedComic
						featuredComic={Gallery[currentComic]}
						navComic={this.navComic}>
					</FeaturedComic>
				</Swipe>
				<img style={{'display': 'none'}} src={Gallery[currentComic + 1] ? Gallery[currentComic+1].image : ''} alt=""/>
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
					if ( this.state.currentComic !== 0 ) {
						this.setState({ currentComic: this.state.currentComic - 1 })
					}
					break
				case 'next':
					if (Gallery.length - 1 !== this.state.currentComic) {
						this.setState({ currentComic: this.state.currentComic + 1 })
					}
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
