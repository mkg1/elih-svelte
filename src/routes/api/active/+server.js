import { fetchActiveMarkdownPosts } from '$lib/utils';
import { json } from '@sveltejs/kit';

// TODO: add try/catch block in case something goes wrong
export const GET = async () => {
    console.log("in the api endpoing");
    const activePosts = await fetchActiveMarkdownPosts();
    const sortedPosts = activePosts.sort((a, b) => {
        return new Date(b.meta.date) - new Date(a.meta.date);
    });

    return json(sortedPosts);
}