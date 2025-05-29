import React, { useState, useEffect } from 'react'; //для доп функций (хранение данных, триггеры как эффект)
import { useParams, useNavigate } from 'react-router-dom'; //получение данных и переход между страницаим
import { Card, CardContent, Typography, Table, Box, Button, //интерфейс
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  Paper, } from '@mui/material';

const API_URL = 'https://restcountries.com/v3.1'; //данные о странах

export default function CountryInfo() {
    const { cca3 } = useParams(); // получаем код страны с ссылки
    const [country, setCountry] = useState(null); //хранение данных о стране
    const navigate = useNavigate(); // используем navigate для перехода

    useEffect(() => { //запускается, когда меняется код страны (сса3)
        const fetchCountry = async () => { //загружаем подробную информацию о стране по её коду (cca3)
            const response = await fetch(`${API_URL}/alpha/${cca3}`); //запрашиваем данные с API по коду страны
            const data = await response.json(); //преобразуем ответ в JSON
            setCountry(data[0]); //сохраняем данные стран (обновляется), состояние - State
        };

        fetchCountry();
    }, [cca3]); // запускается заново, если cca3 меняется

    if (!country) {
        return <Typography>Loading...</Typography>; // если данные о стране ещё не загрузились, показываем загрузку
    }

    return ( // возвращаем интерфейс, когда данные загружены. Карточка для красивого отображения информации
        <Card>
            <CardContent>
                <Box display="flex" justifyContent="center"> {/*контейнер для флага, выравниваем по центру*/}
                    <Box // добавляем тонкую черную рамку без отступов
                        sx={{
                            border: '1px solid black', // черная тонкая рамка
                        }}
                    >
                        <img // картинка флага страны
                            src={country.flags.svg} // ссылка
                            alt={`Flag of ${country.name.common}`} // текст, если картинка не загрузится
                            width="200" // ширина флага
                            style={{ display: 'block', margin: 0 }} // убираем отступы
                        />
                    </Box>
                </Box>
                {/*показываем название страны по центру*/}
                <Typography variant="h5" align="center">{country.name.common}</Typography>
                
                  <TableContainer component={Paper} sx={{ mt: 2 }}> {/*таблица с информацией о стране*/}
        <Table>
          <TableBody>
            <TableRow> {/*столица*/}
              <TableCell><strong>Capital</strong></TableCell>
              <TableCell>{country.capital?.[0] || 'No data'}</TableCell>
            </TableRow>
            <TableRow> {/*население*/}
              <TableCell><strong>Population</strong></TableCell>
              <TableCell>{country.population?.toLocaleString() || 'No data'}</TableCell>
            </TableRow>
            <TableRow> {/*площадь*/}
              <TableCell><strong>Area</strong></TableCell>
              <TableCell>{country.area?.toLocaleString()} km²</TableCell>
            </TableRow>
            <TableRow> {/*языки*/}
              <TableCell><strong>Languages</strong></TableCell>
              <TableCell>{country.languages ? Object.values(country.languages).join(', ') : 'No data'}</TableCell>
            </TableRow>
            <TableRow> {/*валюта*/}
              <TableCell><strong>Currencies</strong></TableCell>
              <TableCell>
                {country.currencies
                  ? Object.values(country.currencies)
                      .map((cur) => `${cur.name} (${cur.symbol})`)
                      .join(', ')
                  : 'No data'}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

                {/*кнопка "Назад" для перехода обратно в список стран*/}
                <Box display="flex" justifyContent="center" mt={2}>
                    <Button
                    variant="contained" // стиль кнопки (заполненная)
                    color="primary" //цвет
                    onClick={() => navigate('/')}> {/*переход на главную страницу*/}
                        Back to Country List
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
}