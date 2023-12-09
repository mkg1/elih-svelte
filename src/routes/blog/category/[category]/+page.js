export const load = async ({ params }) => {
    const { category } = params;
    const response = await fetch(`/api/posts`);
    const allPosts = await response.json();

    const posts = allPosts.filter((post) => post.meta.categories.include(category));

	return {
        category,
        posts
    };
};
 