import type { GetStaticProps } from "next";
import type { Post } from "../../@types/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import TimeAgo from "react-timeago";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

type Props = {
  post: Post[];
};

function Index({ post }: Props) {
  return (
    <article className="prose mx-auto lg:prose-xl text-white prose-a:text-white prose-headings:text-white p-4">
      <Head>
        <title>{post[0].fields.title}</title>
      </Head>
      <div>
        <button className="bg-blue-500 rounded-md mb-4">
          <Link href="/">
            <a className="no-underline font-bold px-4 py-1 block">BACK</a>
          </Link>
        </button>
        <h1 className="text-3xl font-mono mb-0 lg:mb-0">
          {post[0].fields.title}
        </h1>
        <TimeAgo date={post[0].sys.createdAt} />
      </div>
      {documentToReactComponents(post[0].fields.body, renderOptions)}
    </article>
  );
}

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      return (
        <div className="relative mx-auto w-full my-4">
          <Image
            src={`https:${node.data.target.fields.file.url}`}
            height={node.data.target.fields.file.details.image.height}
            width={node.data.target.fields.file.details.image.width}
          />
        </div>
      );
    },
  },
};

export async function getStaticPaths() {
  const client = require("../../contentful");
  const posts = await client.getEntries({
    content_type: "post",
  });

  const slugs = posts.items.map((post: Post) => {
    return { params: { slug: post.fields.slug } };
  });

  return {
    paths: slugs,
    fallback: "blocking",
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const client = require("../../contentful");
  const post = await client.getEntries({
    content_type: "post",
    "fields.slug": params?.slug,
  });

  return {
    props: {
      post: post.items,
    },
  };
};

export default Index;
