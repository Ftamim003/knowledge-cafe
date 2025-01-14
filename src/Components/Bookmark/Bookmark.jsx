import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title}=bookmark
    return (
        <div className='bg-slate-100 p-3 rounded-md m-3'> 
            <h3 className="text-xl">{title}</h3>
        </div>
    );
};

Bookmark.propTypes={
bookmark:PropTypes.object,
}

export default Bookmark;