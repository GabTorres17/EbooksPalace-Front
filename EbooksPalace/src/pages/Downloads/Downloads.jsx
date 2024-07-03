import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Downloads.module.css';

const Downloads = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [transactions, setTransactions] = useState([]);
    const user = JSON.parse(localStorage.getItem('userProfile'));
    const userId = user ? user.id : null;

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get(`https://ebookspalace.onrender.com/paid-cart/${userId}`);
                setBooks(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        const fetchTransactions = async () => {
            try {
                const response = await axios.get(`https://ebookspalace.onrender.com/history/${userId}`);
                setTransactions(response.data);
            } catch (error) {
                setError(error);
            }
        };

        if (userId) {
            fetchBooks();
            fetchTransactions();
        }
    }, [userId]);

    const handleDownloads = async (bookId) => {
        try {
            const response = await axios.get(`https://ebookspalace.onrender.com/download/${bookId}`, {
                params: { userId },
                responseType: 'blob'
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${bookId}.pdf`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error downloading the book:', error);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className={styles.downloads}>
            <h1>Mis libros</h1>
            {books.length === 0 ? (
                <p>Aún no tienes libros</p>
            ) : (
                <ul>
                    {books.map(book => (
                        <li key={book.id}>
                            <img src={book.image} alt={book.name} />
                            <div>
                                <h2>{book.name}</h2>
                                <p>{book.author}</p>
                            </div>
                            <button onClick={() => handleDownloads(book.id)}>Descargar</button>
                        </li>
                    ))}
                </ul>
            )}
            <h2>Historial de transacciones</h2>
            {transactions.length === 0 ? (
                <p>No hay transacciones</p>
            ) : (
                <table className={styles.transactionTable}>
                    <thead>
                        <tr>
                            <th>ID del Carrito</th>
                            <th>Monto</th>
                            <th>Fecha de Compra</th>
                            <th>Libros</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map(transaction => (
                            <tr key={transaction.cartId}>
                                <td>{transaction.cartId}</td>
                                <td>{transaction.amount}</td>
                                <td>{new Date(transaction.purchaseDate).toLocaleDateString()}</td>
                                <td>
                                    {transaction.books.map(book => (
                                        <div key={book.id} className={styles.bookInfo}>
                                            <img src={book.image} alt={book.name} />
                                            <div>{book.name} - Precio: {book.price}</div>
                                        </div>
                                    ))}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Downloads;

