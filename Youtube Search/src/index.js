import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';

// Create a new component. This component
// should produce some html

const API_KEY = "AIzaSyBB4cSkOdzufkyxk0Ba0xOvLPzx5aoVVUY";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos : [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState ({
                videos: videos,
                selectedVideo : videos[0]    
            }); // this.setState({videos: videos})
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video = {this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}

//JSX actually turns into html and displays on the DOM.
//JSX can not be transpiled by the browser, so must wrap it in
// javascript to be transpiled.
//HTML inside function is called JSX (subset of JS) 
// It allows us to add html to javascript functions.

// Take this component's generated html
// and put it on the page (in the DOM)

ReactDOM.render(<App />,document.querySelector('.container'));
