import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import store from './store';
import { getReadableStories } from './selectors/story';
import { STORY_ARCHIVE } from './constants/actionTypes';
import { doArchiveStory } from './actions/archive';

const stories = [
    {
        title: 'React',
        url: 'https://facebook.github.io/react/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID : 0
    }, 
    {
        title: 'Redux',
        url: 'https://github.com/reactjs/redux/',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID : 1,       
    },
]

// subscribing to the store and then rendering

function render() {
    ReactDOM.render(
        <App 
            stories = {getReadableStories(store.getState())} 
            onArchive={id => store.dispatch(doArchiveStory(id))}
        />, document.getElementById('root'));
}

store.subscribe(render);
render();