<script context="module">
    export const load = async ({ fetch }) => {
      const posts = await fetch('/api/posts.json')
      const allPosts = await posts.json()
  
      return {
        props: {
          posts: allPosts
        }
      }
    }
</script>
<script>
    export let posts;
    console.log(posts[0].meta.pos)
</script>
<svelte:head>
  <title>DavidB | Projects</title>
</svelte:head>
<div class="flex flex-wrap">
    {#each posts as post}
        <div class="shrink">
            <a href={post.path}>
                {post.meta.title}
                <img class="object-cover w-64 h-64 object-{post.meta.pos} " src="/projectmedia/{post.meta.thumb}" /> 
            </a>
        </div>
    {/each}
</div>