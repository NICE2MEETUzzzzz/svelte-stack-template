/// <reference lib="webworker" />
import { build, files } from '$service-worker'

import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'

import { CacheableResponsePlugin } from 'workbox-cacheable-response'
import { NetworkFirst, StaleWhileRevalidate } from 'workbox-strategies'

const staticAssets = build.concat(files)

precacheAndRoute(
    staticAssets.map((url) => ({
        url,
        revision: Date.now().toString()
    }))
)

registerRoute(
    ({ request }) => request.url === '/',
    new StaleWhileRevalidate({
        cacheName: 'start-url'
    })
)

registerRoute(
    ({ request }) => request.mode === 'navigate',
    new NetworkFirst({
        cacheName: 'pages',
        plugins: [
            new CacheableResponsePlugin({
                statuses: [200]
            })
        ]
    })
)
