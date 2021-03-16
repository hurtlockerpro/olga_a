export interface IMovies {

    page?: number;
    total_results?: number;
    total_pages?: number;
    results?: IMovie[];
}

export interface IMovie {
    id:number;
    original_title:string;
    overview:string;
    release_date:string;
}