//consider wrapping in a try catch in case something goes wrong
export async function load({ params }) {
    const post = await import(`../${params.post}.md`); //param."post" here can be anything - this is the dynamic part of dynamic routes
    const { title, date, categories } = post.metadata; //front matter from markdown file
    const content = post.default; //content from markdown file

    return {
        content,
        title,
        date,
        categories
    }
}




