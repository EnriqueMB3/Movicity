import React, { useEffect, useState } from "react";
import { FaRegGrinStars } from "react-icons/fa";
import { fetchConToken } from "../../helpers/fetch";
import { typesdb } from "../../types/typesmdb";
import { HeaderSection, SectionBody } from "../shared/styles";
import { People } from "./People";
import { SkeletonPeopleList } from "./SkeletonPeopleList";
import { ListPersonImages } from "./styles";
export const ListPeople = () => {

  
  const [peopledb, setPeopledb] = useState([])
    
  const getPeople = async ()=> {
      const response = await fetchConToken(`${typesdb.person}/${typesdb.popular}`);
      setPeopledb(response.results)
  }

  useEffect(() => {
    getPeople();
  }, [])

    const people =  Array.from(Array(10).keys());;

  return (
    <SectionBody>
      <HeaderSection>
        <h2>
          People <FaRegGrinStars />
        </h2>
      </HeaderSection>
        <ListPersonImages>
        {
                    peopledb.length == 0? 
                    people.map( (_, idx) => <SkeletonPeopleList key={idx}/> )
                    :
                    peopledb.map( (people, idx) => <People key={idx} people={people}/> )

                }
            
        </ListPersonImages>
    </SectionBody>
  );
};
