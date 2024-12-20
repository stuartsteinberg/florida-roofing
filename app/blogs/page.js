import AppLayout from "@/components/AppLayout";
import { client } from "@/sanity/lib/client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const query = `*[_type == "post"] {
  _id,
  title,
  slug,
  author->{
    name
  },
  mainImage{
    asset->{
      _id,
      url
    },
    alt
  },
  categories[]->{
    title
  },
  publishedAt,
  body[0..2]
}
`;


export default async function BlogList() {
    const posts = await client.fetch(query);
    return (
        <> 
              <Head>
                <title>Blog - Florida Roofing | Expert Tips & Guides</title>
                <meta name="description" content="Discover expert roofing tips, guides, and updates on Florida Roofing's blog. Stay informed about roofing maintenance, materials, and trends." />
                <meta name="keywords" content="Florida roofing blogs, roofing tips, roof maintenance, roof repair guides, roofing materials, Florida roof trends" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Florida Roofing" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Blog - Florida Roofing | Expert Tips & Guides" />
                <meta property="og:description" content="Explore expert roofing tips and guides. Florida Roofing's blog keeps you updated on roofing trends, maintenance advice, and more." />
                <meta property="og:url" content="https://florida-roofing.vercel.app/blogs" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Blog - Florida Roofing | Expert Tips & Guides" />
                <meta name="twitter:description" content="Discover expert roofing tips and stay updated with the latest trends in roofing materials and maintenance." />
                <link rel="canonical" href="https://florida-roofing.vercel.app/blogs" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="h-[35vh] w-full bg-[url('/images/hero.jpg')] bg-cover bg-center bg-no-repeat relative  font-bold border-b-2 border-primary">
                <div className="bg-gradient-to-b to-black/90 from-black/50 absolute w-full h-full" />
                <div className="flex flex-col w-full h-full justify-center items-center z-10 relative  ">
                    <div className="flex flex-col gap-2 max-w-6xl mx-auto " >
                        <h1 className="text-5xl" >Blogs</h1>
                        <hr className="  border-none  bg-primary" />
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto grid  sm:grid-cols-2  md:grid-cols-3 my-20 gap-10">
                {posts.map((post) => (
                    <div key={post._id} className="bg-white border border-transparent p-2 rounded-md hover:border-primary group " >
                        <div className="h-[230px] relative overflow-hidden  ">
                            <Image src={post.mainImage?.asset?.url} layout="responsive" className="group-hover:scale-125 transition-all duration-300 " width={100} height={50} alt={post.mainImage?.alt || ''} />
                        </div>
                        <div className="p-4 flex flex-col gap-2 " >
                            <h2 className="text-xl text-black font-semibold" >{post.title}</h2>
                            <p className="text-black" >
                                {post.body && post.body.map((block, index) => (
                                    <span key={index}>{block.children[0]?.text}</span>
                                ))}
                            </p>
                            <Link href={`/blogs/${post.slug.current}`} className="text-black hover:underline" >Read More</Link>
                        </div>
                        <p className="py-3 border-t text-center text-black " >{new Date(post.publishedAt).toDateString()}</p>
                    </div>
                ))}
            </div>
            </>
    );
}