import { insertNews } from "@/lib/createNews";
import { useState } from "react";

export default function addNews() {
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  // const [image, setImage] = useState("");

  return <h1>add news</h1>;

  // return (
  //   <form>
  //     <input
  //       type="text"
  //       value={title}
  //       onChange={(e) => setTitle(e.target.value)}
  //       placeholder="title"
  //     />
  //     <input
  //       type="text"
  //       value={content}
  //       onChange={(e) => setContent(e.target.value)}
  //       placeholder="content"
  //     />
  //     <input
  //       type="text"
  //       value={image}
  //       onChange={(e) => setImage(e.target.value)}
  //       placeholder="image"
  //     />
  //     <button
  //       type="button"
  //       onClick={() =>
  //         insertNews({ title: title, content: content, image: image })
  //       }
  //     >
  //       Submit
  //     </button>
  //   </form>
  // );
}
