import { Review } from "./review.model";
import { Observable } from "rxjs";

export class Book {
    id: string;
    name: string;
    author: string;
    avgRating: number;
    month: string;
    pageCount: number;
    // imageUrl: Observable<any>;
    // reviews: Review[];
}