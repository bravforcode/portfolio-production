interface PageProps {
  params: { slug: string }
}

export default function BlogPost({ params }: PageProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <article className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">Blog Post: {params.slug}</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p>This is where your blog content would go.</p>
        </div>
      </article>
    </div>
  )
}
