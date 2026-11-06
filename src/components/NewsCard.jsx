import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    tags,
  } = news;

  const date = new Date(news.author.published_date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="card bg-base-100 border border-base-300 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between bg-base-200 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm">{author.name}</h4>
            <p className="text-xs text-base-content/60">{date}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-base-content/70">
          <button className="hover:text-primary">
            <FaRegBookmark />
          </button>
          <button className="hover:text-primary">
            <FaShareAlt />
          </button>
        </div>
      </div>

      <div className="p-4 space-y-3">
        {/* Title */}
        <h2 className="text-lg font-bold leading-snug">{title}</h2>

        {/* Thumbnail */}
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-48 object-cover rounded-lg"
        />

        {/* Details */}
        <p className="text-sm text-base-content/70">
          {details.slice(0, 150)}...{" "}
          <span className="text-orange-500 font-semibold cursor-pointer">
            Read More
          </span>
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="badge badge-outline badge-sm">
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-base-300 pt-3">
          <div className="flex items-center gap-2 text-orange-500">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={i < rating.number ? "text-orange-500" : "text-base-300"}
              />
            ))}
            <span className="text-sm text-base-content/70">{rating.number}</span>
            {rating.badge && (
              <span className="badge badge-warning badge-sm capitalize">
                {rating.badge}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 text-base-content/70">
            <FaEye />
            <span className="text-sm">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;