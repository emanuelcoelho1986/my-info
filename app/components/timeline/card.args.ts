import { Icon } from "../icon.args";

export interface CardArgs {
    webpage: string;
    country: string;

    title: string;
    description: string;
    from: string;
    to?: string;
    
    name?: string;
    icon?: Icon;

    technologies?: Icon[];
    programmingLanguages?: Icon[]
}