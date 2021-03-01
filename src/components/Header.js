export const Header = ({ setQuery, setPost }) => {

  return (
      <header className="lg:px-16 px-6 border-b-2 border-gray-400 shadow bg-blue-pastel flex flex-wrap items-center py-5">

        <div className="flex-1 flex justify-between items-center">
          <p 
            className="text-gray-800 text-xl font-bold md:text-2xl cursor-pointer" 
            onClick={ () => {
              setPost(null) 
            }}
          >我がブログ</p>
        </div>

        <div className="flex items-center w-auto">
          <input 
            type="text" 
            onKeyUp={e => setQuery(e.target.value)}
            className="border-2 border-gray-300 bg-paper-brown h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" 
            placeholder="検索" 
          />
        </div>

      </header>
  );
}