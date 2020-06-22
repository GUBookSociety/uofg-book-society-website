import { Picture } from "./picture.model";
import { Review } from "./review.model";

export class Book {
    id: string;
    name: string;
    author: string;
    avgRating: number;
    month: string;
    pageCount: number;
    // picture: Picture;
    // reviews: Review[];
}