export const Post = ({ post }) => {

  return (
    <div className="bg-dark-pastel h-full pt-8 pb-12">
      <div className="bg-paper-brown rounded-sm md:w-3/5 m-auto min-h-screen my-10">
        <p className="text-4xl pt-10 pl-10">{ post.title }</p>
        <p className="text-2xl px-10 leading-10 my-6 pt-6 border-t-2 border-yellow-800">
          { post.content.split('\n').map(i => {
            return <p>{i}</p>
          })}
        </p>
      </div>
    </div>
  );
}