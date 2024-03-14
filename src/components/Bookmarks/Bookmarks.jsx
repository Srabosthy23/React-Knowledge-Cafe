import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4">
            <h1 className="text-2xl text-center ">Bookmarked blogs: {bookmarks.length}</h1>
            {
                bookmarks.map( (bookmark) => <Bookmark key = {bookmark.id} bookmark = {bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;