import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, useLocation, Routes, Route } from 'react-router-dom';
import { Container, TextField, Pagination, Box } from '@mui/material';
import CountryList from './components/CountryList';
import CountryInfo from './components/CountryInfo';

const API_URL = 'https://restcountries.com/v3.1/all';

function MainApp() {
    const location = useLocation();
    const [countries, setCountries] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // количество стран на одной странице

    useEffect(() => {
        const fetchCountries = async () => {
            const response = await fetch(API_URL);
            const data = await response.json();
            setCountries(data);
            setFilteredCountries(data);
        };

        fetchCountries();
    }, []); // загрузка только один раз при старте

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
        const filtered = countries.filter((country) =>
            country.name.common.toLowerCase().includes(query)
        );
        setFilteredCountries(filtered);
        setCurrentPage(1); // сброс на первую страницу при поиске
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentCountries = filteredCountries.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);

    const handlePageChange = (_, value) => {
        setCurrentPage(value);
    };

    return (
        <Container>
            {location.pathname === '/' && (
                <>
                    <h1>Countries App</h1>
                    <TextField
                        label="Search Country"
                        variant="outlined"
                        fullWidth
                        value={searchQuery}
                        onChange={handleSearch}
                        sx={{ marginBottom: 2 }}
                    />
                </>
            )}

            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <CountryList countries={currentCountries} />
                            {totalPages > 1 && (
                                <Box display="flex" justifyContent="center" mt={2}>
                                    <Pagination
                                        count={totalPages}
                                        page={currentPage}
                                        onChange={handlePageChange}
                                        color="primary"
                                    />
                                </Box>
                            )}
                        </>
                    }
                />
                <Route path="/country/:cca3" element={<CountryInfo />} />
            </Routes>
        </Container>
    );
}

// это основной экспорт, для работы маршрутов
export default function App() {
    return (
        <Router> {/*позволяет использовать маршруты*/}
            <MainApp />
        </Router>
    );
}