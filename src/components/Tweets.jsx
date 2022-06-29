import Image from 'next/image';
import TextBuilder from './common/TextBuilder';
import Typography from './common/Typography';
import Like from './icons/Like';
import Retweet from './icons/Retweet';
import Share from './icons/Share';
import Twitter from './icons/Twitter';
import Verified from './icons/Verified';

const Tweets = () => {
  const tweets = [
    {
      type: 'tweet',
      author: {
        name: 'NASA',
        tag: '@NASA',
        avatar: '/nasa-avatar.jpg',
        verified: true,
      },
      content: [
        {
          type: 'default',
          value: 'SCRUB: Launch attempt for our ',
        },
        {
          type: 'hashtag',
          value: '#CYGNSS',
        },
        {
          type: 'default',
          value:
            ' mission aborted due to an issue with hydraulic pump that releases the rocket: ',
        },
        {
          type: 'anchor',
          value: 'https://blogs.nasa.gov/cygnss',
        },
      ],
      image: '/tweets-placeholder.jpg',
      date: '1m',
    },
    {
      type: 'retweet',
      author: {
        name: 'NASA',
      },
      targetTweet: {
        type: 'tweet',
        author: {
          name: 'NASA_LSP',
          tag: '@NASA_LSP',
          avatar: '/nasa-lsp-avatar.png',
          verified: false,
        },
        content: [
          {
            type: 'default',
            value: 'The L-1011 ',
          },
          {
            type: 'hashtag',
            value: '#Stargazer',
          },
          {
            type: 'default',
            value:
              ' is on the ground again. The team is in the process of saving the ',
          },
          {
            type: 'hashtag',
            value: '#Pegasus',
          },
          {
            type: 'default',
            value: ' 🚀 ',
          },
          {
            type: 'hashtag',
            value: '#CYGNSS',
          },
        ],
        image: '/tweets-stargazer.jpg',
        date: '2h',
      },
    },
    {
      type: 'tweet',
      author: {
        name: 'NASA',
        tag: '@NASA',
        avatar: '/nasa-avatar.jpg',
        verified: true,
      },
      content: [
        {
          type: 'default',
          value: 'SCRUB: Launch attempt for our ',
        },
        {
          type: 'hashtag',
          value: '#CYGNSS',
        },
        {
          type: 'default',
          value:
            ' mission aborted due to an issue with hydraulic pump that releases the rocket: ',
        },
        {
          type: 'anchor',
          value: 'https://blogs.nasa.gov/cygnss',
        },
      ],
      image: '/tweets-placeholder.jpg',
      date: '3h',
    },
    {
      type: 'tweet',
      author: {
        name: 'NASA',
        tag: '@NASA',
        avatar: '/nasa-avatar.jpg',
        verified: true,
      },
      content: [
        {
          type: 'default',
          value: 'SCRUB: Launch attempt for our ',
        },
        {
          type: 'hashtag',
          value: '#CYGNSS',
        },
        {
          type: 'default',
          value:
            ' mission aborted due to an issue with hydraulic pump that releases the rocket: ',
        },
        {
          type: 'anchor',
          value: 'https://blogs.nasa.gov/cygnss',
        },
      ],
      image: '/tweets-placeholder.jpg',
      date: '11h',
    },
  ];

  return (
    <div
      className={
        'scrollable max-h-[20rem] overflow-y-auto rounded-md bg-deepspace-700 p-6 lg:max-h-[40rem]'
      }
    >
      <div className='m-auto flex max-w-[30rem] flex-col gap-8'>
        <h3 className={'text-xl font-extrabold text-white'}>
          Tweets by{' '}
          <span
            className={'cursor-pointer text-horizon-500 hover:text-horizon-700'}
          >
            @NASA
          </span>
        </h3>
        {tweets.map((tweet, idx) =>
          tweet.type === 'tweet' ? (
            <Tweet tweet={tweet} key={idx} />
          ) : (
            <div className={'flex flex-col'} key={idx}>
              <div className={'mb-2 flex'}>
                <Retweet className={'w-[.875rem] fill-horizon-500'} />
                <span className={'ml-1 text-[.8rem] text-white'}>
                  {tweet.author.name} Retweeted
                </span>
              </div>
              <Tweet tweet={tweet.targetTweet} index={idx} />
            </div>
          )
        )}
      </div>
    </div>
  );
};

const Tweet = ({ tweet, index }) => {
  const { author, content, image, date } = tweet;

  return (
    <div key={index} className={'flex flex-col'}>
      <div className={'flex items-start justify-between'}>
        <div className='flex'>
          <div
            className={
              'relative mr-2 h-10 w-10 cursor-pointer hover:brightness-[.85]'
            }
          >
            <Image
              src={author.avatar}
              layout={'fill'}
              objectPosition={'50% 50%'}
              objectFit={'cover'}
              className={'rounded-md'}
              alt={`${author.name} avatar`}
            />
          </div>
          <div className={'mb-4 flex flex-col'}>
            <div className={'flex'}>
              <span
                className={'cursor-pointer text-sm font-extrabold text-white'}
              >
                {author.name}
              </span>
              {author.verified && (
                <Verified className={'ml-1 w-[.875rem] fill-[#1DA1F2]'} />
              )}
            </div>
            <span className={'cursor-pointer text-sm'}>{author.tag}</span>
          </div>
        </div>
        <Twitter
          className={
            'w-[.875rem] cursor-pointer fill-deepspace-100 hover:fill-deepspace-50'
          }
        />
      </div>
      <TextBuilder className={'text-[.8rem] leading-6'} components={content} />
      <div
        className={
          'relative my-3 h-28 w-full cursor-pointer hover:brightness-[.85]'
        }
      >
        <Image
          src={image}
          layout={'fill'}
          objectPosition={'50% 50%'}
          objectFit={'cover'}
          className={'rounded-md'}
          alt={`tweet related image`}
        />
      </div>
      <div className={'flex items-center justify-between'}>
        <div className={'flex gap-4'}>
          <Like
            className={
              'w-[.875rem] cursor-pointer fill-deepspace-100 hover:fill-deepspace-50'
            }
          />
          <Share
            className={
              'w-[.875rem] cursor-pointer fill-deepspace-100 hover:fill-deepspace-50'
            }
          />
        </div>
        <span className={'text-xs text-deepspace-100'}>{date}</span>
      </div>
    </div>
  );
};

export default Tweets;
