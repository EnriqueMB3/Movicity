import React from 'react'
import { Chart } from '../shared/Chart'

export const HeaderMovie = () => {



    return (
        <section class="header-movie">
            <Chart vote_average={85} />
            <span>
                <img
                    src="https://flagcdn.com/h24/us.png"
                    srcset="https://flagcdn.com/h48/us.png 2x"
                    height="24"
                    alt="United States" /> US
            </span>
            <h4>Diciembre 12 del 2021 </h4>
            <h1>Spider-Man: No Way Home</h1>
            <ul class="list-genres">
                <li>Action</li> <span>&#x2022;</span>
                <li>Adventure</li> <span>&#x2022;</span>
                <li>Science Fiction</li>
            </ul>
            <p>Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means
                to be Spider-Man.</p>
            <div><i class="fa-solid fa-stopwatch"></i>
                <h4>2h 30 min</h4>
            </div>

        </section>
    )
}
