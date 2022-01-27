import React from 'react';
import Story from './Story';
import './StoryReel.css';

function StoryReel() {
    return <div className='storyReel'>
        <Story
        image='https://avatars.githubusercontent.com/u/79858908?v=4'
        profileSrc='https://avatars.githubusercontent.com/u/79858908?v=4'
        title='Huseyn Ahmadov' />

        <Story
        image='/images/osman.png'
        profileSrc='/images/osman.png'
        title='Osman Abdullazada' />

        <Story
        image='/images/soltan.png'
        profileSrc='/images/soltan.png'
        title='Soltan Soltanli' />

        <Story
        image='/images/qusik.png'
        profileSrc='/images/qusik.png'
        title='Gusein Guseinov' />

        <Story
        image='/images/elnur.png'
        profileSrc='/images/elnur.png'
        title='Elnur Hasanov' />
    </div>;
}

export default StoryReel;
