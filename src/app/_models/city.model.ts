import { Country } from './country.model';
import { User } from './user.model';

export interface City {
	id: number;
    name: string;
	country: Country;
	createdAt: Date;
	latitude: number;
	longitude: number;

}