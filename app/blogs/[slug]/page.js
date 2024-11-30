
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
    .substring(0, 160) || 'Check out this amazing blog post on our website.';

  // Define the canonical URL and image URL
  const postUrl = `/${slug.current}`;
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
      <div className="h-[50vh] w-full bg-[url('/images/hero.jpg')] bg-cover bg-center bg-no-repeat relative text-white border-b-2 border-primary">
        <div className="bg-gradient-to-b to-black/90 from-black/50 absolute w-full h-full" />
        <div className="flex flex-col w-full h-full justify-center items-center z-10 relative  ">
          <div className="flex flex-col gap-2 max-w-6xl mx-auto " >
            <h1 className="text-5xl font-semibold" >{blog.title}</h1>
            <hr className="border-none  bg-primary" />
          </div>
        </div>
      </div>
      <div className='max-w-6xl mx-auto'>

        <div className='grid grid-cols-10  my-20 gap-6 relative ' >
          <article className='text-white col-span-7 blog-container '  >
            <div className='max-h-[70vh] overflow-hidden rounded-xl '>
              <Image src={blog.mainImage?.asset?.url} className='rounded-xl' layout="responsive" width={100} height={100} alt={blog.mainImage?.alt || ''} />
            </div>
            <p>{new Date(blog.publishedAt).toDateString()}</p>
            <PortableText value={blog.body} />
          </article>
          <div className='  bg-secondary col-span-3 rounded-md h-[800px] sticky top-0 w-full  '>

          </div>
        </div>
      </div>
    </>
  );
}