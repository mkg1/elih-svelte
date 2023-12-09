export const fetchMarkdownPosts = async () => {
    const allPostFiles = import.meta.glob('/src/routes/blog/*.md');  //import.meta.glob = vite function - imports any file matching the glob; returns object where keys are relative file paths and value is function that loads file content as a promsie
    const iterablePostFiles = Object.entries(allPostFiles);

    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver();
            const postPath = path.slice(11, -3); //removes 'src/routes' and '.md' to end up with relative path

            return {
                meta: metadata,
                path: postPath
            }
        })
    )
    return allPosts;
}

