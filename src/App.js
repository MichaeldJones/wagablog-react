import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { Header } from "./components/Header";
import { Query } from "./components/Query";
import { Post } from "./components/Post";
import { posts } from "./data";

function App() {
  const [post, setPost] = useState(null);
  const [query, setQuery] = useState("");

  return (
    <>
      <Header setQuery={ setQuery } setPost={ setPost } />

      
        {post && (
          <motion.div initial="small" animate="big" variants={{
            small: {
              scale: .4,
              opacity: 0.5
            },
            big: {
              scale: 1,
              opacity: 1,
              transition: {
                duration: .5
              }
            },
          }}>
            <Post post={ post } />
          </motion.div>
        )}
      
      
      

      {!post && (
        <Query
          posts={ posts }
          setPost={ setPost }
          query={ query }
        />
      )}

      
    </>
  );
}

export default App;
