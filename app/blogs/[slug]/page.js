
import NotFound from '@/components/NotFound';
import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import Head from 'next/head';
import Image from 'next/image';

const query = `*[_type == "post" && slug.current == $slug][0] {
  title,
  slug,
  mainImage{
    asset->{
      _id,
      url
    },
    alt
  },
  publishedAt,
  body
}`;

export default async function BlogDetailPage({ params }) {


  const blog = await client.fetch(query, { slug: params.slug });

  if (!blog) {
    return <NotFound title='Blog not found' />;
  }
  const {
    title,
    slug,
    mainImage,
    publishedAt,
    body,
  } = blog;

  // Generate a description from the body
  const description = body
    ?.map((block) => block.children?.map((child) => child.text).join(' '))
    .join(' ')
    .substring(0, 160) || title;

  // Define the canonical URL and image URL
  const postUrl = `https://www.bergroofingcontractors.com/${slug.current}`;
  const imageUrl = mainImage?.asset?.url || '/default-image.jpg';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content="Florida Roofing" />
        <meta name="publish_date" content={publishedAt} />
        <link rel="canonical" href={postUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={postUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:published_time" content={publishedAt} />
        <meta property="og:site_name" content="Florida Roofing" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:url" content={postUrl} />
      </Head>
      <div className="min-h-[70vh]  lg:min-h-[50vh] w-full bg-[url('/images/hero.jpg')] bg-cover bg-center bg-no-repeat relative text-white border-b-2 border-primary flex flex-col  justify-center items-center">
        <div className="bg-gradient-to-b to-black/90 from-black/50 absolute w-full h-full" />
        <div className='relative h-full max-w-6xl mx-auto ' >
          <h1 className="text-5xl font-semibold z-10" >{blog.title}</h1>
        </div>
        
      </div>
      <div className='max-w-6xl mx-auto'>

        <div className='grid grid-cols-10  my-20 gap-6 relative p-6 md:p-0 ' >
          <article className='text-white col-span-full  md:col-span-7 blog-container '  >
            <div className='max-h-[70vh] overflow-hidden rounded-xl '>
              <Image src={blog.mainImage?.asset?.url} className='rounded-xl' layout="responsive" width={100} height={100} alt={blog.mainImage?.alt || ''} />
            </div>
            <p>{new Date(blog.publishedAt).toDateString()}</p>
            <PortableText className='blog-conta' value={blog.body} />
          </article>
          <div className='  bg-secondary col-span-full md:col-span-3 rounded-md h-[800px] sticky top-0 w-full  '>

          </div>
        </div>
      </div>
    </>
  );
}