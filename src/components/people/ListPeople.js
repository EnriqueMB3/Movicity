import React from "react";
import { FaRegGrinStars } from "react-icons/fa";
import { HeaderSection, SectionBody } from "../shared/styles";
import { People } from "./People";
import { ListPersonImages } from "./styles";
export const ListPeople = () => {


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
                people.map((_, idx)=> <People key={idx}/>)
            }
        </ListPersonImages>
    </SectionBody>
  );
};
