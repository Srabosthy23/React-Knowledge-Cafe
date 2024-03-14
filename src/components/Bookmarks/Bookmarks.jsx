import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4">
            <div>
                <h2 className="text-3xl">Reading Time: {readingTime}</h2>
            </div>
            <h1 className="text-2xl text-center ">Bookmarked blogs: {bookmarks.length}</h1>
            {
                bookmarks.map( (bookmark, idx) => <Bookmark key = {idx} bookmark = {bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;