import {createClient} from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: "5z3w1kk9",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: true,
});

const builder = imageUrlBuilder(client)

export function urlfor(source: any) {
    return builder.image(source);
}