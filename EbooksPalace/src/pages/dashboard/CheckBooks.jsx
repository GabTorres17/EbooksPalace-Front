import axios from "axios";

const getAllBooks = async () => {

    const response = await axios.get(`http://localhost:3001/books`);
    // console.log(response.data.books);
    return response.data.books;
  };

export default getAllBooks;
