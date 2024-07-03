import axios from "axios";
export const getAllBooks = async () => {
  const response = await axios.get(`https://ebookspalace.onrender.com/books`);
  console.log(response.data.books);
  return response.data.books;
};