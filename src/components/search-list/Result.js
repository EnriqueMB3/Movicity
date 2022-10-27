import React from 'react'
import { Link } from 'react-router-dom';

export const Result = ({ titleMedia }) => {
    const { origianl_name, name, original_title, title, poster_path, media_type, id } = titleMedia;
    const nameOriginalTitle = origianl_name || original_title;
    const nameTitle = name || title;


    return (
        <li>
            <Link to={`/title/${media_type}/${id}`} >
                <div>
                    <img src={`http://image.tmdb.org/t/p/w500${poster_path}`} />
                </div>
                {
                    nameOriginalTitle && <h2>{nameOriginalTitle.length > 25 ? nameOriginalTitle.slice(0, 40) + '...' : nameOriginalTitle}</h2>
                }

                <h1>{nameTitle.length > 25 ? nameTitle.slice(0, 25) + '...' : nameTitle}</h1>
            </Link>
        </li>
    )
}
