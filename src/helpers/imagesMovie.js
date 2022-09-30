import React from 'react'

export const imagesMovie = (MoviesImages) => {
    const movie_image={
        logo:'',
        backdrop:'',
        poster:''
    } 
    movie_image.backdrop = MoviesImages.backdrops[0]?.file_path;
    movie_image.backdropTitle = MoviesImages.backdrops?.find((mi) => mi.iso_639_1 === 'en')?.file_path;
    movie_image.logo = MoviesImages.logos[0]?.file_path 
    movie_image.poster = MoviesImages.posters[0]?.file_path
    return movie_image;
    
}
