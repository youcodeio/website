export class Info {
   etag: string,
   items: [
      {
         brandingSettings: {
            channel: {
               description: string,
               keywords: string,
               profileColor: string,
               showBrowseView: boolean,
               showRelatedChannels: boolean,
               title: string
            },
            hints: [
               {
                  property: string,
                  value: string
               }
            ],
            image: {
               bannerImageUrl: string,
               bannerMobileExtraHdImageUrl: string,
               bannerMobileHdImageUrl: string,
               bannerMobileImageUrl: string,
               bannerMobileLowImageUrl: string,
               bannerMobileMediumHdImageUrl: string,
               bannerTabletExtraHdImageUrl: string,
               bannerTabletHdImageUrl: string,
               bannerTabletImageUrl: string,
               bannerTabletLowImageUrl: string,
               bannerTvImageUrl: string
            }
         },
         contentDetails: {
            googlePlusUserId: string,
            relatedPlaylists: {
               uploads: string
            }
         },
         etag: string,
         id: string,
         kind: string,
         snippet: {
            description: string,
            localized: {
               description: string,
               title: string
            },
            publishedAt: string,
            thumbnails: {
               default: {
                  url: string
               },
               high: {
                  url: string
               },
               medium: {
                  url: string
               }
            },
            title: string
         },
         statistics: {
            commentCount: string,
            subscriberCount: string,
            videoCount: string,
            viewCount: string
         }
      }
   ],
   kind: string,
   pageInfo: {
      resultsPerPage: number,
      totalResults: number
   }
}