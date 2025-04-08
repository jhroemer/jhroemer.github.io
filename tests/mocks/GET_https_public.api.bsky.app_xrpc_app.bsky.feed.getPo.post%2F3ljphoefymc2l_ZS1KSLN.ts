const GET_https_public_api_bsky_app_xrpc_app_bsky_feed_getPo_post_2F3ljphoefymc2l_ZS1KSLN =
  {
    method: "GET",
    url: "https://public.api.bsky.app/xrpc/app.bsky.feed.getPostThread?uri=at%3A%2F%2Fdid%3Aplc%3Alaqygfbyvnkyuhsuaxmp6ez3%2Fapp.bsky.feed.post%2F3ljphoefymc2l",
    statusCode: 200,
    response: {
      thread: {
        $type: "app.bsky.feed.defs#threadViewPost",
        post: {
          uri: "at://did:plc:laqygfbyvnkyuhsuaxmp6ez3/app.bsky.feed.post/3ljphoefymc2l",
          cid: "bafyreidpnm7nfzzovmuayv5arq3bk23mlmhxddoaqtgw3cpxiqrqnxsp5i",
          author: {
            did: "did:plc:laqygfbyvnkyuhsuaxmp6ez3",
            handle: "jensroemer.bsky.social",
            displayName: "Jens Rømer",
            avatar:
              "https://cdn.bsky.app/img/avatar/plain/did:plc:laqygfbyvnkyuhsuaxmp6ez3/bafkreifopjlmac6t2qkxz2sgeuzidjvsavyq2m44tn4ocevj4lgh2ofaye@jpeg",
            labels: [],
            createdAt: "2023-09-11T06:19:15.658Z",
          },
          record: {
            $type: "app.bsky.feed.post",
            createdAt: "2025-03-06T12:11:41.885Z",
            embed: {
              $type: "app.bsky.embed.external",
              external: {
                description: "",
                title: "Jhey's exploding layers",
                uri: "https://jensroemer.com/posts/jheys-exploding-layers/",
              },
            },
            facets: [
              {
                $type: "app.bsky.richtext.facet",
                features: [
                  {
                    $type: "app.bsky.richtext.facet#mention",
                    did: "did:plc:mqptcphqrjhr5nziy33f3kco",
                  },
                ],
                index: { byteEnd: 52, byteStart: 43 },
              },
              {
                features: [
                  {
                    $type: "app.bsky.richtext.facet#link",
                    uri: "https://www.youtube.com/watch?v=AbSehcT19u0&ab_channel=VinnieFarsheds",
                  },
                ],
                index: { byteEnd: 150, byteStart: 119 },
              },
              {
                features: [
                  {
                    $type: "app.bsky.richtext.facet#link",
                    uri: "https://jensroemer.com/posts/jheys-exploding-layers/",
                  },
                ],
                index: { byteEnd: 281, byteStart: 251 },
              },
            ],
            langs: ["en"],
            text: 'So I was looking at some of CSS rock star \n@jhey.dev\n\'s work, when I had a "Hal fixing a light bulb" moment (reference www.youtube.com/watch?v=AbSe...), and it inspired me to write a post about his exploded/3D layer effect used in some of his demos.\n\njensroemer.com/posts/jheys-...',
          },
          embed: {
            $type: "app.bsky.embed.external#view",
            external: {
              uri: "https://jensroemer.com/posts/jheys-exploding-layers/",
              title: "Jhey's exploding layers",
              description: "",
            },
          },
          replyCount: 2,
          repostCount: 0,
          likeCount: 4,
          quoteCount: 0,
          indexedAt: "2025-03-06T12:11:42.251Z",
          labels: [],
        },
        replies: [
          {
            $type: "app.bsky.feed.defs#threadViewPost",
            post: {
              uri: "at://did:plc:mqptcphqrjhr5nziy33f3kco/app.bsky.feed.post/3ljpijlmzjc2v",
              cid: "bafyreiazzoreefpixo67a6rkt6dtrm4mbp72ks6qc5mwo5upbccd44imny",
              author: {
                did: "did:plc:mqptcphqrjhr5nziy33f3kco",
                handle: "jhey.dev",
                displayName: "Jhey ʕ·ᴥ·　ʔ",
                avatar:
                  "https://cdn.bsky.app/img/avatar/plain/did:plc:mqptcphqrjhr5nziy33f3kco/bafkreigfgoglzu3fcumvkcctwj2yvnfyw5hdhws5bzel4ss5aett23yw3m@jpeg",
                labels: [],
                createdAt: "2023-04-25T08:08:30.078Z",
              },
              record: {
                $type: "app.bsky.feed.post",
                createdAt: "2025-03-06T12:26:55.424Z",
                langs: ["en"],
                reply: {
                  parent: {
                    cid: "bafyreidpnm7nfzzovmuayv5arq3bk23mlmhxddoaqtgw3cpxiqrqnxsp5i",
                    uri: "at://did:plc:laqygfbyvnkyuhsuaxmp6ez3/app.bsky.feed.post/3ljphoefymc2l",
                  },
                  root: {
                    cid: "bafyreidpnm7nfzzovmuayv5arq3bk23mlmhxddoaqtgw3cpxiqrqnxsp5i",
                    uri: "at://did:plc:laqygfbyvnkyuhsuaxmp6ez3/app.bsky.feed.post/3ljphoefymc2l",
                  },
                },
                text: "lovely stuff 👏\n\nfunny enough, building another one of these today 😅\n\nI like your embedded demos, how are you handling them on your site?",
              },
              replyCount: 1,
              repostCount: 0,
              likeCount: 2,
              quoteCount: 0,
              indexedAt: "2025-03-06T12:26:55.953Z",
              labels: [],
            },
            replies: [
              {
                $type: "app.bsky.feed.defs#threadViewPost",
                post: {
                  uri: "at://did:plc:laqygfbyvnkyuhsuaxmp6ez3/app.bsky.feed.post/3ljpipeikfc2o",
                  cid: "bafyreib5svcm3macl67w4ktaqjyl63wp6ujzwpidhdyipaoslc5xudlqou",
                  author: {
                    did: "did:plc:laqygfbyvnkyuhsuaxmp6ez3",
                    handle: "jensroemer.bsky.social",
                    displayName: "Jens Rømer",
                    avatar:
                      "https://cdn.bsky.app/img/avatar/plain/did:plc:laqygfbyvnkyuhsuaxmp6ez3/bafkreifopjlmac6t2qkxz2sgeuzidjvsavyq2m44tn4ocevj4lgh2ofaye@jpeg",
                    labels: [],
                    createdAt: "2023-09-11T06:19:15.658Z",
                  },
                  record: {
                    $type: "app.bsky.feed.post",
                    createdAt: "2025-03-06T12:30:09.265Z",
                    langs: ["en"],
                    reply: {
                      parent: {
                        cid: "bafyreiazzoreefpixo67a6rkt6dtrm4mbp72ks6qc5mwo5upbccd44imny",
                        uri: "at://did:plc:mqptcphqrjhr5nziy33f3kco/app.bsky.feed.post/3ljpijlmzjc2v",
                      },
                      root: {
                        cid: "bafyreidpnm7nfzzovmuayv5arq3bk23mlmhxddoaqtgw3cpxiqrqnxsp5i",
                        uri: "at://did:plc:laqygfbyvnkyuhsuaxmp6ez3/app.bsky.feed.post/3ljphoefymc2l",
                      },
                    },
                    text: "Thanks Jhey! Love your stuff man, I always got stressed out about impressive CSS demo's, but yours are (besides of being the best) also really easy to apply to real-world stuff. \n\nMy site is built with Astro, post is written in mdx so I'm just rendering an astro component in there.",
                  },
                  replyCount: 0,
                  repostCount: 0,
                  likeCount: 2,
                  quoteCount: 0,
                  indexedAt: "2025-03-06T12:30:09.847Z",
                  labels: [],
                },
                replies: [],
                threadContext: {},
              },
            ],
            threadContext: {
              rootAuthorLike:
                "at://did:plc:laqygfbyvnkyuhsuaxmp6ez3/app.bsky.feed.like/3ljpjazrum22y",
            },
          },
          {
            $type: "app.bsky.feed.defs#threadViewPost",
            post: {
              uri: "at://did:plc:a4vhrpia4dxoz6hmmkllhyry/app.bsky.feed.post/3ljq35zdtzk2p",
              cid: "bafyreib7mqfldaken6llg56lytms2fc5xcvgu32izbsk4nmz5mnmzicoxe",
              author: {
                did: "did:plc:a4vhrpia4dxoz6hmmkllhyry",
                handle: "jackharner.com",
                displayName: "Jack Harner 🚀 Freelance Web Developer",
                avatar:
                  "https://cdn.bsky.app/img/avatar/plain/did:plc:a4vhrpia4dxoz6hmmkllhyry/bafkreia2iobj6g2ka36np2djk3fcjh6devcq5kxhnxqtuj3cs7gtg2m6pe@jpeg",
                labels: [],
                createdAt: "2024-11-13T21:32:37.173Z",
              },
              record: {
                $type: "app.bsky.feed.post",
                createdAt: "2025-03-06T18:00:28.247Z",
                langs: ["en"],
                reply: {
                  parent: {
                    cid: "bafyreidpnm7nfzzovmuayv5arq3bk23mlmhxddoaqtgw3cpxiqrqnxsp5i",
                    uri: "at://did:plc:laqygfbyvnkyuhsuaxmp6ez3/app.bsky.feed.post/3ljphoefymc2l",
                  },
                  root: {
                    cid: "bafyreidpnm7nfzzovmuayv5arq3bk23mlmhxddoaqtgw3cpxiqrqnxsp5i",
                    uri: "at://did:plc:laqygfbyvnkyuhsuaxmp6ez3/app.bsky.feed.post/3ljphoefymc2l",
                  },
                },
                text: "Love the in-post demo! Might have to start incorporating MDX in my own blog instead of just linking off to codepen.",
              },
              replyCount: 0,
              repostCount: 0,
              likeCount: 1,
              quoteCount: 0,
              indexedAt: "2025-03-06T18:00:28.756Z",
              labels: [],
            },
            replies: [],
            threadContext: {
              rootAuthorLike:
                "at://did:plc:laqygfbyvnkyuhsuaxmp6ez3/app.bsky.feed.like/3ljq5q3aycj2o",
            },
          },
        ],
        threadContext: {},
      },
    },
  };

export default GET_https_public_api_bsky_app_xrpc_app_bsky_feed_getPo_post_2F3ljphoefymc2l_ZS1KSLN;
