import { fetchMarkdownPosts } from '$lib/utils';
import { json } from '@sveltejs/kit';

// ideally, add try/catch block in case something goes wrong
export const GET = async () => {
    const allPosts = await fetchMarkdownPosts();
    const sortedPosts = allPosts.sort((a, b) => {
        return new Date(b.meta.date) - new Date(a.meta.date);
    });

    return json(sortedPosts);
}
