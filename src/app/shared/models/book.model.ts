import { Review } from "./review.model";
import { Observable } from "rxjs";

export class Book {
    id: string;
    name: string;
    author: string;
    avgRating: number;
    month: string;
    pageCount: number;
    picture: string;
    // reviews: Review[];
}