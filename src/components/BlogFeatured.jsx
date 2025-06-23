import blogFeaturedData from "../data/blog-featured.json";

// Import local images
import blog1 from "../assets/blog-1.jpg";
import blog2 from "../assets/blog-2.jpg";
import blog3 from "../assets/blog-3.jpg";

const imageMap = {
  "blog-1.jpg": blog1,
  "blog-2.jpg": blog2,
  "blog-3.jpg": blog3,
};

const BlogFeatured = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex items-center justify-center mb-12">
          <div className="w-10 h-[2px] bg-black mr-4" />
          <h2 className="text-3xl font-bold text-center">OUR BLOG</h2>
          <div className="w-10 h-[2px] bg-black ml-4" />
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogFeaturedData.map((post) => (
            <div
              key={post.id}
              className="relative bg-white border border-gray-200 hover:shadow-lg transition duration-300 overflow-visible group"
            >
              {/* Image with Zoom on Hover */}
              <div className="relative overflow-hidden ">
                <img
                  src={imageMap[post.image]}
                  alt={post.title}
                  className="w-full h-64 object-cover transform group-hover:scale-120 transition duration-500 ease-in-out"
                />

                {/* Category Tags */}
                <div className="absolute top-2 left-2 flex flex-wrap gap-2 z-10">
                  {post.category.map((cat, idx) => (
                    <span
                      key={idx}
                      className="bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Blog Info - Half Inside Image + Half Outside */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-12 w-[80%]
               bg-white  px-4 py-3 text-center transition-all duration-500 ease-in-out">
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 italic">By {post.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogFeatured;
