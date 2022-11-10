<script lang="ts">
    import { page } from '$app/stores'

    let urlPath = `http://localhost:3000/${$page.url.pathname}`

    let name = 'nicez'
    // let twitterDevAccount = '@nicez'

    export let title = 'nicez'
    export let alternativeTitle = ['nicez']

    export let description = 'nicez'
    export let author = 'nicez'
    export let icon = '/favicon.png'
    export let createdAt: number | null = null

    export let image = {
        info: {
            width: 1980,
            height: 1080
        },
        link: '/assets/images/cover.jpg'
    }

    export let noIndex = false
</script>

<svelte:head>
    <title>{title}</title>

    <meta name="title" content={title} />
    <meta name="description" content={description} />
    <meta name="author" content={author} />
    <link rel="icon" href={icon} />
    <link rel="shortcut icon" href={icon} />
    <link rel="canonical" href={urlPath} />
    <meta
        name="keyword"
        content={`${title},${
            alternativeTitle.length > 0 ? alternativeTitle.join(',') : ''
        }`}
    />

    {#if noIndex}
        <meta name="robots" content="noindex" />
    {/if}

    {#if createdAt}
        <meta
            property="article:published_time"
            content={new Date(createdAt * 1000).toLocaleDateString()}
        />
    {/if}

    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="article:author" content={author} />
    <meta property="og:site_name" content={name} />
    <meta property="og:image" content={image.link} />
    <meta property="og:image:width" content={image.info.width.toString()} />
    <meta property="og:image:height" content={image.info.height.toString()} />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={urlPath} />

    <meta name="theme-color" content="#ffffff" />
</svelte:head>
