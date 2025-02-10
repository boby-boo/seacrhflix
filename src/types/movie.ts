export type Movies = {
    adult: boolean,
    backdrop_path: 'string',
    genre_ids: Array<number>,
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
}

export type Genres = {
    id: number,
    name: string
}

export type Movie = {
    belongs_to_collection: null | string,
    budget: number,
    genres: Genres[],
    homepage: string,
    imdb_id: string,
    origin_country: string[],
    production_companies: {
        id: number,
        logo_path: string,
        name: string,
        origin_country: string
    }[],
    production_countries: {
        iso_3166_1: string,
        name: string
    }[],
    revenue: number,
    runtime: number,
    spoken_languages: {
        spoken_languages: string,
        iso_639_1: string,
        name: string,
    }[],
    status: string,
    tagline: string,
    genre_ids?: Array<number>,
} & Movies;

export type Results = {
    page: number,
    results: Movies[],
    total_results: string,
    total_pages: number
}

export type TMBDError = {
    status_code: number,
    message: string,
    status_message: string,
}

export type ApiOptions = {
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
    headers: {
        accept: string,
        Authorization: string
    }
}