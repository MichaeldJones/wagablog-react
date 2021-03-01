function shorten(blog_post) {
  
  if(blog_post.length > 100) {

    return blog_post.substr(0,99) + " ...";
  } else {

    return blog_post;
  }
}

export const Query = ({ posts, setPost, query }) => {

  return (
    <div className="m-auto mt-16 pt-16 mb-16 pb-16 bg-dark-pastel lg:w-1/2 w-full" id="bg1">
      {posts.map(post => {
        if(post.title.includes(query)) {
          return (
            <div className="flex justify-center" key={ post.id } >

              <div 
                className="cursor-pointer lg:w-2/3 w-full px-10 py-6 mt-4 mb-4 bg-paper-brown rounded-lg shadow-md"
                onClick={() => {
                  setPost(post)
              }}>
                
                <p className="font-light text-gray-600">{ post.created }</p>

                <div className="mt-4">
                  <p className="text-2xl text-gray-700 font-bold">{ post.title }</p>
                  <p className="mt-6 pt-6 mb-4 border-t-2 border-indigo-400 text-gray-500">{ shorten(post.content) }</p>
                </div>

              </div>
            </div>
          );
        }
      })}
    </div>
  );
  
}