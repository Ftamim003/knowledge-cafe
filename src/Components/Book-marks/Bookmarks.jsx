import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookMarks,readingTime}) => {
    return (
        <div className="md:w-1/3 pt-3 bg-gray-300 mt-7 rounded-md ml-3 mb-3">
            <h2 className='text-center text-xl text-purple-900 bg-purple-300 rounded-md p-3 m-3'>Total reading Time : {readingTime}</h2>
            <h2 className='text-center text-xl'>Bookmarks : {bookMarks.length}</h2>
            {
                bookMarks.map((bookmark,idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes={
    bookMarks:PropTypes.array,
    readingTime:PropTypes.number
}

export default Bookmarks;