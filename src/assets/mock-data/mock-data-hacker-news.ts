import { IComment } from "src/app/interfaces/comment";
import { IStory } from "src/app/interfaces/story";

export const itemMockData: IStory = {
    by: 'rwr',
    descendants: 123,
    id: 1,
    kids: [],
    score: 5,
    time: 4,
    title: 'Mock title',
    type: 'Story',
    url: 'www.google.com'  
    }

export const commentMockData: IComment = {
    by: 'ABC',
    id: 123,
    kids: [1,2],
    parent: 1,
    text: 'mock',
    time: 12,
    type: "comment"   
}