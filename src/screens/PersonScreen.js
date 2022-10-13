import React, { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ListHorizontal } from '../components/horizontal-list-title/styles';
import { Navbar } from '../components/nav/Navbar';
import { PeopleSection } from '../components/people/styles';
import { Sidebar } from '../components/sidebar/Sidebar';
import { ListMovieTheaters } from '../components/vertical-list-movie/ListMovieTheaters';
import { fetchConToken } from '../helpers/fetch';
import useSidebar from '../hooks/useSidebar';

export const PersonScreen = () => {


    const { isShowing, toggle } = useSidebar();

    const { id, type } = useParams();
    const [persondb, setPerson] = useState([])

    const getPerson = async () => {

        const response = await fetchConToken(`person/${id}`);
        console.log(response)
        setPerson(response)
    }

    useMemo(() => {
        getPerson();
    }, [id])


    return (
        <>

            <Sidebar isShowing={isShowing} toggle={toggle} />
            <Navbar isShowing={isShowing} toggle={toggle} />
            <PeopleSection >

                <div>
                    <img src={`http://image.tmdb.org/t/p/w500${persondb.profile_path}`} style={{}} />

                </div>
                <div>
                    <h1>{persondb.name}</h1>
                    <h2>{persondb.place_of_birth}</h2>
                    <h3>{persondb.known_for_department}</h3>
                    <p>{persondb.biography}</p>
                    <span>{persondb.popularity}</span>
                </div>


            </PeopleSection>
            <ListMovieTheaters title='Know for' type='person' category={`${id}/combined_credits`} />
        </>
    )
}
