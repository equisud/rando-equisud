export async function load({ fetch, params }) {
    const res = await fetch(`https://raw.githubusercontent.com/equisud/rando-equisud/main/src/lib/_data/2022/${params.slug}`)
    const content = await res.json()
    return {
      post: {
        content
      }
    };
  }