import type { Post } from "../types";

interface Data {
	publication: {
		posts: {
			edges: Array<{
				node: Post;
			}>;
		};
	};
}

export default async function fetchPosts(): Promise<Array<Post>> {
	const response = await fetch("https://gql.hashnode.com", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			query: `
        query GetPosts {
          publication(host: "blog.usmans.me") {
            posts(first: 6) {
              edges {
                node {
                  slug
                  title
                  cuid
                  reactionCount
                  publishedAt
                  responseCount
                  replyCount
                  coverImage {
                    url
                  }
                }
              }
            }
          }
        }
      `,
		}),
	});

	const { data }: { data: Data } = await response.json();
	const { posts } = data.publication;

	// posts = posts.map(post => {
	//   return { ...post, coverImage: getCloudinaryUrl(post) };
	// });

	return posts.edges.map((e) => e.node);
}
