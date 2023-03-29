export default function Head() {
  const metadata = {
    title: "home page",
    description: "home page",
  };

  return ( 
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={metadata.description} />
      <link rel="icon" href="/favicon.ico" />
      <title>{metadata.title}</title>
    </>
  );
}
