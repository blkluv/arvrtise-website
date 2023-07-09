import Head from "next/head";

interface HeadContentProps {
  content: string;
}

export default function HeadContent({ content }: HeadContentProps) {
  return (
    <Head>
      <title>ARVRTISE - {content}</title>
      <meta
        property="og:description"
        content={"ARVRtise it here - " + {content}}
      />
    </Head>
  );
}