import React, { useState } from 'react';
import uuid from 'uuid/v1';
import NewSongFrom from './NewSongFrom';

const SongList = () => {
    const [songs, setSongs] = useState([
        {
            title: 'this wild darkness',
            id: 1
        },
        {
            title: 'the part of me',
            id: 2
        },
        {
            title: 'yes i\'m free',
            id: 3
        }
    ]);
    const addSong = (title) => {
        setSongs([...songs, { title, id: uuid() }]);
    }
    return (
        <div className="song-list">
            <ul>
                {songs.map( song => {
                    return ( <li key={song.id}>{song.title}</li> )
                })}
            </ul>
            <NewSongFrom addSong={addSong}/>
        </div>
    );
}
 
export default SongList;