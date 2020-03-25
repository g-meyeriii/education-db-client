import { Major } from '../major/major.class';

export class Student{
    id: number=0;
    name:string ="New Student";
    sat: number=400;
    gpa: number= 2.0;
    majorId?: number=null;
    major: Major= null;

    constructor (){}
}