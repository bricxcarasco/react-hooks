import React, { useState, useEffect } from 'react';
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
    const [age, setAge] = useState(20)
    const addSong = (title) => {
        setSongs([...songs, { title, id: uuid() }]);
    }
    useEffect(() => {
        console.log('useeffect hook ran', songs);
    }, [songs])

    useEffect(() => {
        console.log('useeffect hook ran', age);
    }, [age])
    return (
        <div className="song-list">
            <ul>
                {songs.map( song => {
                    return ( <li key={song.id}>{song.title}</li> )
                })}
            </ul>
            <NewSongFrom addSong={addSong}/>
            <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
        </div>
    );
}
 
export default SongList;