import { CiBookmark } from "react-icons/ci";
import PropTypes from 'prop-types';

const Blog = ({blog, addBookCart,addReadingTime}) => {

    const {title,cover,author_img,author,posted_date,reading_time,hashtags}=blog
    return (
        <div className='mb-20'>
            <img className='w-full mb-7 rounded-xl' src={cover}  alt={`Cover picture of the tit;e: ${title}`} />

            <div className='flex justify-between mb-3'>
                <div className='flex gap-3'>
                  <img className='w-14' src={author_img} alt="" />
                   <div>
                      <h3 className='text-2xl'>{author}</h3>
                      <p>{posted_date}</p>
                    </div>
                </div>

                <div className='flex items-center gap-1'>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>addBookCart(blog)} className="text-2xl"><CiBookmark></CiBookmark></button>

                 
                </div>
            </div>

            <h2 className="text-3xl mb-3">{title}</h2>

            <p>
                {
                  hashtags.map((tags,idx)=> <span key={idx}><a href="">#{tags}</a></span>)
                }
            </p>

          <button onClick={()=>addReadingTime(reading_time)} className="text-violet-600 underline">Add reading time </button>

        </div>
    );
};

Blog.propTypes={
    blog:PropTypes.object.isRequired,
    addBookCart:PropTypes.func,
    addReadingTime:PropTypes.func
}

export default Blog;