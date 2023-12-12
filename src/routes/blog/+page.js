export const load = async ({ fetch }) => {
    const response = await fetch(`/api/active`);
    const posts = await response.json();

    return {
        posts
    }
}

